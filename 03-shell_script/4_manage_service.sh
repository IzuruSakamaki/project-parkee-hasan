#!/bin/bash

manage_service() {
    action="$1"
    service_name="$2"
    sudo systemctl "$action" "$service_name"
}

manage_service "$1" "$2"