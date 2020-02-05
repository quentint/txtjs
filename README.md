# TxtJS

A &lt;canvas&gt; font and typesetting engine for @CreateJS.

[![Build Status](https://travis-ci.org/ReCreateJS/txtjs.svg?branch=master)](https://travis-ci.org/ReCreateJS/txtjs)

![Architecture Diagram](/site/architecture.png)

## Debugging Travis Builds via Docker

As per https://docs.travis-ci.com/user/running-build-in-debug-mode/#restarting-a-job-in-debug-mode-via-api:

Fetch personal API access token from Travis web site profile:
Find out Travis job ID from web UI job url.

Then in a regular shell, using the `TRAVIS_TOKEN` and `TRAVIS_JOBID` environment variables:

```sh
TRAVIS_TOKEN="get_token_from_profile"; \
TRAVIS_JOBID="get_jobid_from_url"; \
curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Travis-API-Version: 3" \
  -H "Authorization: token ${TRAVIS_TOKEN}" \
  -d "{\"quiet\": true}" \
  https://api.travis-ci.org/job/${TRAVIS_JOBID}/debug
```

Use `tmux` to split terminal into separate views: <kbd>Ctrl</kbd> + <kbd>B</kbd> then press <kbd>"</kbd>.

### Debugging Chrome Headless

Start testem without launching any browsers

```sh
npm run test:dev
# or
npx testem --launch=none
```

Get the DOM output from Google Chrome:

```sh
google-chrome \
  --headless \
  --disable-gpu \
  --dump-dom \
  http://localhost:7357/
```

Further Chrome headless debugging info: https://developers.google.com/web/updates/2017/04/headless-chrome
