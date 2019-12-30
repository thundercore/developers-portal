#!/bin/bash
#set -ex
declare -a file_id_list=("faqs/general" "get-wallet" "ledger-nano-s" "financial-service-landscape" "faqs/stablecoin" "faqs/stblecoin-trustwallet" "faqs/stblecoin-metamask")

for i in "${file_id_list[@]}"
do
  if [[ "$i" != *"faqs"* ]]; then
    filename=$i
  else
    filename=`echo $i | awk -F '/' '{print $2}'`
  fi

  dev_url="dev-portal.dev.tt-eng.com"
  sc_url="sc-portal.dev.tt-eng.com"
  
  dev_path="$i"
  sc_path="$i"

  touch $filename.html
  mkdir $filename
  
  aws s3 cp $filename.html s3://$dev_url/docs/$dev_path --website-redirect "http://$sc_url/docs/$sc_path"
  aws s3 cp --recursive $filename s3://$dev_url/docs/$dev_path --website-redirect "http://$sc_url/docs/$sc_path"
done
