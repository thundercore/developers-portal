#!/bin/bash
set -x
SLACK_URL=${SLACK_URL?You should specify the slack webhook URL}
COMMIT=${COMMIT?You should specify the commit tag}
AUTHOR=${AUTHOR?You should specify the commit author name}
BUILD_URL=${BUILD_URL?You should specify the circleci build status URL}
MESSAGE=${MESSAGE?You should specify the commit message}
APP_URL=${APP_URL}
STATUS=${STATUS:FAIL}

DESCRIPTION="The deploy information about dev-portal, check the ${APP_URL} to see latest version"
COLOR="good"
EXIT_CODE=0
if [ "$STATUS" != "SUCCESS" ] ; then
    COLOR="ff0000"
    EXIT_CODE=1
    DESCRIPTION="Deploy fail, please go to ${BUILD_URL} to check"
fi

curl -X POST -H 'Content-type: application/json' --data \ "
    { \
        \"attachments\": [
        {
            \"color\": \"${COLOR}\",
            \"pretext\": \"${DESCRIPTION}\",
            \"fields\": [
                {
                    \"title\": \"Author Name\",
                    \"value\": \"${AUTHOR}\",
                    \"short\": false
                },
                {
                    \"title\": \"Latest Commit\",
                    \"value\": \"${COMMIT}\",
                    \"short\": false
                },
                {
                    \"title\": \"Commit Message\",
                    \"value\": \"${MESSAGE}\",
                    \"short\": false
                },
                {
                    \"title\": \"Build/Deploy Status\",
                    \"value\": \"${BUILD_URL}\",
                    \"short\": false
                }
            ]
        }
      ]
    } \
    " ${SLACK_URL}

exit $EXIT_CODE
