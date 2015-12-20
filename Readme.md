Will take input from STDIN, replace invalid HTML tags with text nodes
and send result to STDOUT.

The text used to replace the tags is generated from the tag names themselves
and any attributes it might have, e. g.
`<div><this should='' be=''></this> text.</div>` ->
`<div>this should be text.</div>`

The user is allowed to override the replacement text.

Usage:

        [input command] | node index.js | [output command]

e. g.:

        cat 1.html | node index.js | tee out.html
