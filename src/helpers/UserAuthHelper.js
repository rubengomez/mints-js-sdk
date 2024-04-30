class UserAuthHelper {
  constructor(mintsUser) {
    this.mintsUser = mintsUser;
  }

  async mintsUserSignedIn(res) {
    try {
      return await this.mintsUser.me['data'];
    } catch (error) {
      // Handle the client Unauthorized error
      // if mints response is negative delete the session cookie
      res.clearCookie('mints_user_session_token');
      return null;
    }
  }

  /**
   * Mints user login.
   * Starts a user session in mints.cloud and sets a session cookie.
   */
  async mintsUserLogin(email, password, res) {
    let response = await this.mintsUser.login(email, password);
    res.cookie('mints_user_session_token', response['api_token'], { secure: true, httpOnly: true });
    return { response: true };
  }

  /**
   * Mints user magic link login.
   * Starts a user session in mints.cloud and sets a session cookie.
   */
  async mintsUserMagicLinkLogin(hash, res) {
    // Login in mints
    const response = await this.mintsUser.magicLinkLogin(hash);
    if (response['data']) {
      // Set a cookie with the session token
      res.cookie('mints_user_session_token', response['data']['api_token'], { secure: true, httpOnly: true });
      res.redirect(response['data']['redirect_url'] || '/');
    } else {
      res.redirect('/');
    }
  }

  /**
   * Mints user logout.
   * Destroy session from mints.cloud and delete local session cookie.
   */
  mintsUserLogout(res) {
    // Logout from mints
    // this.mintsUser.logout();
    // Delete local cookie
    res.clearCookie('mints_user_session_token');
  }
}

export default UserAuthHelper;