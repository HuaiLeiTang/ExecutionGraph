#!/bin/bash
owndir="$(cd "$(dirname "$0")"; pwd -P)"
$owndir/git-hooks/pre-commit --formatAll