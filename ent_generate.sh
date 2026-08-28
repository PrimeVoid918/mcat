#!/usr/bin/env bash
set -e

GOTOOLCHAIN=go1.24.8 \
go run entgo.io/ent/cmd/ent@v0.14.6 generate ./ent/schema