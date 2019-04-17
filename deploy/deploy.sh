#!/usr/bin/env bash
URL=${URL?url not set}

function write-policy() {
  cat <<EOF >policy.json
{
  "Version": "2008-10-17",
  "Id": "PolicyForDeveloperPortalWebsite",
  "Statement": [
      {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": {
              "AWS": "*"
          },
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::${URL}/*"
      }
  ]
}
EOF
}

set -x
res=$(aws s3api list-buckets --query Buckets[?Name==\`${URL}\`].Name)
# Create and setup bucket if it does not exist.
if [ "$res" == "[]" ]; then
  echo "Creating new bucket for url ${URL}"
  # Make bucket if does not exists, and ignore failure if already exists.
  aws s3 mb s3://${URL}
  aws s3 website s3://${URL}/ --index-document index.html
  write-policy
  aws s3api put-bucket-policy --bucket ${URL} --policy file://${PWD}/policy.json
fi

# Delete old contents from bucket
aws s3 rm s3://${URL}/ --recursive
aws s3 ls s3://${URL}/ --recursive
# Copy newly built website to bucket
aws s3 cp website/build/dev-portal/ s3://${URL}/ --recursive
aws s3 ls s3://${URL}/ --recursive
