import Cookies from "./Cookies.js";
class ContactAuthHelper {
  constructor(mintsContact) {
    this.mintsContact = mintsContact;
  }

  /**
   * Mints Contact Login.
   * Starts a contact session in mints.cloud and sets a session cookie
   * @param {string} email - Contact's email
   * @param {string} password - Contact's password
   * @param {object} res - Response object
   */
  async mintsContactLogin(email, password, res) {
    // Login in mints
    const response = await this.mintsContact.login(email, password);
    // Get session token from response
    const sessionToken = response.session_token;
    const idToken = response.contact?.contact_token ? response.contact.contact_token : response.contact?.id_token;

    res.cookie('mints_contact_session_token', sessionToken, { secure: true, httpOnly: true });
    res.cookie('mints_contact_id', idToken, { secure: true, httpOnly: true });

    return { response: true }
  }

  /**
   * Mints Contact Magic Link Login.
   * Starts a contact session in mints.cloud and sets a session cookie
   * @param {object} hash - Magic link hash
   * @param {boolean} redirectInError - Redirect to home page in case of error
   * @param {object} res - Response object
   */
  async mintsContactMagicLinkLogin(hash, redirectInError = false, res) {
    // Login in mints
    const response = await this.mintsContact.magicLinkLogin(hash);

    if (response.data) {
      // Get session token from response
      const sessionToken = response.data?.session_token;
      const idToken = response.data?.contact?.session_token ? response.data.contact.session_token : response.data.contact.id_token;

      res.cookie('mints_contact_session_token', sessionToken, { secure: true, httpOnly: true });
      res.cookie('mints_contact_id', idToken, { secure: true, httpOnly: true });

      if (redirectInError) {
        res.redirect(response.data?.redirect_url || '/');
      } else {
        res.redirect('/');
      }
    }
  }

  /**
   * Mints Contact Logout.
   * Destroy session from mints.cloud and delete local session cookie
   */
  mintsContactLogout(res) {
    // Logout from mints
    this.mintsContact.logout();
    // Delete session token and keep the contact token id
    // Never delete the mintsContactId cookie to avoid the creation of ghosts
    res.clearCookie('mints_contact_session_token');
  }

  /**
   * Check if contact is signed in.
   * @returns {boolean} - True if contact is signed in, otherwise false
   */
  async mintsContactSignedIn(res) {
    try {
      // Check status in mints
      const response = await this.mintsContact.status();
      return response.success || false;
    } catch (error) {
      // Handle the client Unauthorized error
      // if mints response is negative delete the session cookie
      res.clearCookie('mints_contact_id');
      return false;
    }
  }
}

export default ContactAuthHelper;