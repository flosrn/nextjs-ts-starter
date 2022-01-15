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
echo "Choose the package you want to install: : "
echo -e "${NC}"

packages=("Storybook" "React Hook Form" "Cypress" "SWR")

select choice in "${packages[@]}"; do
  case $choice in
  "Storybook")
    curl -s $SB | bash -s
    exit
    ;;
  "React Hook Form")
    curl -s $RHF | bash -s
    exit
    ;;
  "Cypress")
    curl -s $CP | bash -s
    exit
    ;;
  "SWR")
    curl -s $SWR | bash -s
    exit
    ;;
  *)
    echo -e "${RED}"
    echo "Invalid option $REPLY"
    echo -e "${NC}"
    ;;
  esac
done
