#!/bin/bash

RED='\033[0;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'

SB='https://raw.githubusercontent.com/flosrn/expansion-pack/master/storybook/trigger.sh'
RHF='https://raw.githubusercontent.com/flosrn/expansion-pack/master/rhf/trigger.sh'
CP='https://raw.githubusercontent.com/flosrn/expansion-pack/master/cypress/trigger.sh'
SWR='https://raw.githubusercontent.com/flosrn/expansion-pack/master/toast/trigger-swr.sh'

echo -e ""
echo -e "${CYAN}==========================="
echo "Expansion pack installation"
echo "==========================="
echo -e "${NC}"

echo -e "${GREEN}"
echo 'Choose package you want to install: '
echo -e "${NC}"

packages=("Storybook" "React Hook Form" "Cypress" "SWR" "Quit")

select fav in "${packages[@]}"; do
  case $fav in
  "Storybook")
    echo -e ""
    echo "$fav installation..."
    echo -e ""
    ;;
  "React Hook Form")
    echo -e ""
    echo "$fav installation..."
    echo -e ""
    ;;
  "Cypress")
    echo -e ""
    echo "$fav installation..."
    echo -e ""
    ;;
 "SWR")
    echo -e ""
    echo "$fav installation..."
    echo -e ""
    ;;
  "Quit")
    echo "User requested exit"
    exit
    ;;
  *)
    echo -e "${RED}"
    echo "Invalid option $REPLY"
    echo -e "${NC}" ;;
  esac
done

#curl -s $STORYBOOK | bash -s
