var clientID = '3caa36c692d94c24849e3e7417d9cb4d';
var redirectURI = 'http://localhost:3000/';

var accessToken ;
var expiresIn ;

 function getAccessToken() {
    if (accessToken){
        return accessToken
    }
    else if (window.location.href.match(/access_token=([^&]*)/)) {
        accessToken = window.location.href.match(/access_token=([^&]*)/)
        expiresIn = window.location.href.match(/expires_in=([^&]*)/)
    }
    else {
        window.location.replace("https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI");
    }

    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
}

export const Spotify = { 

}