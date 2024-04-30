class Teams {
  getTeamTypes() {
    return this.client.raw('get', '/config/teams/team-types');
  }

  getTeams() {
    return this.client.raw('get', '/config/teams');
  }

  getTeam(id) {
    return this.client.raw('get', `/config/teams/${id}`);
  }

  createTeam(data) {
    return this.client.raw('post', '/config/teams', null, this.dataTransform(data));
  }

  updateTeam(id, data) {
    return this.client.raw('put', `/config/teams/${id}`, null, this.dataTransform(data));
  }
}

export default Teams;