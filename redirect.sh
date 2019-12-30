#!/bin/bash
#set -ex
url=${URL}
redirect_url=${REDIRECT_URL}

# from dev to sc
declare -a file_id_list=("faqs/general" "get-wallet" "ledger-nano-s" "financial-service-landscape" "faqs/stablecoin" "faqs/stblecoin-trustwallet" "faqs/stblecoin-metamask")

for i in "${file_id_list[@]}"
do
  if [[ "$i" != *"faqs"* ]]; then
    filename=$i
  else
    filename=`echo $i | awk -F '/' '{print $2}'`
  fi
  
  path="$i"
  redirect_path="$i"

  touch $filename.html
  mkdir $filename
  
  aws s3 cp $filename.html s3://$url/docs/$path --website-redirect "http://$redirect_url/docs/$redirect_path"
  aws s3 cp --recursive $filename s3://$url/docs/$path --website-redirect "http://$redirect_url/docs/$redirect_path"
done

# from sc to dev
path="deploy-your-own-game"
redirect_path="deploy-your-own-game"
filename="deploy-your-own-game"
touch $filename.html
mkdir $filename

aws s3 cp $filename.html s3://$redirect_url/docs/$redirect_path --website-redirect "http://$url/docs/$path"
aws s3 cp --recursive $filename s3://$redirect_url/docs/$redirect_path --website-redirect "http://$url/docs/$path"

# direct to sc
redirect_path="faqs/general"
touch index.html

aws s3 cp index.html s3://$redirect_url/ --website-redirect "http://$redirect_url/docs/$redirect_path"
#aws s3 cp --recursive $filename s3://$url/docs/$path --website-redirect "http://$redirect_url/docs/$redirect_path"
