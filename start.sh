#!/bin/bash

mate-terminal --working-directory=$PWD/frontend -- bash -c 'npm start; exec bash' &

mate-terminal --working-directory=$PWD/backend -- bash -c 'php spark serve; exec bash' &
