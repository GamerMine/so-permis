#!/bin/bash

gnome-terminal --working-directory=/frontend -- bash -c 'npm start; exec bash'

gnome-terminal --working-directory=/backend -- bash -c 'php spark serve; exec bash'