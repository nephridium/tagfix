## Description

Node app that takes input from STDIN, replaces invalid HTML tags with
text nodes enclosed by `‹ ›` and sends result to STDOUT.

The text used to replace the tags is generated from the tag names themselves
and any attributes they might have, e. g.
`<div><this should='' be=''></this> text.</div>` ->
`<div>‹this should be› text.</div>`

The user is allowed to override the replacement text before the
transformed string is sent to output.

## Installation

        npm install

## Usage

        [input command] | node index.js | [output command]

e. g.:

        cat 1.html | node index.js | tee out.html
