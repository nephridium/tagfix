module.exports = {
  // taken from https://github.com/philipwalton/html-inspector
  valid: {
    "a": {
      children: "transparent*",
      attributes: "globals; href; target; download; rel; hreflang; type"
    },
    "abbr": {
      children: "phrasing",
      attributes: "globals"
    },
    "address": {
      children: "flow*",
      attributes: "globals"
    },
    "area": {
      children: "empty",
      attributes: "globals; alt; coords; shape; href; target; download; rel; hreflang; type"
    },
    "article": {
      children: "flow",
      attributes: "globals"
    },
    "aside": {
      children: "flow",
      attributes: "globals"
    },
    "audio": {
      children: "source*; transparent*",
      attributes: "globals; src; crossorigin; preload; autoplay; mediagroup; loop; muted; controls"
    },
    "b": {
      children: "phrasing",
      attributes: "globals"
    },
    "base": {
      children: "empty",
      attributes: "globals; href; target"
    },
    "bdi": {
      children: "phrasing",
      attributes: "globals"
    },
    "bdo": {
      children: "phrasing",
      attributes: "globals"
    },
    "blockquote": {
      children: "flow",
      attributes: "globals; cite"
    },
    "body": {
      children: "flow",
      attributes: "globals; onafterprint; onbeforeprint; onbeforeunload; onfullscreenchange; onfullscreenerror; onhashchange; onmessage; onoffline; ononline; onpagehide; onpageshow; onpopstate; onresize; onstorage; onunload"
    },
    "br": {
      children: "empty",
      attributes: "globals"
    },
    "button": {
      children: "phrasing*",
      attributes: "globals; autofocus; disabled; form; formaction; formenctype; formmethod; formnovalidate; formtarget; name; type; value"
    },
    "canvas": {
      children: "transparent",
      attributes: "globals; width; height"
    },
    "caption": {
      children: "flow*",
      attributes: "globals"
    },
    "cite": {
      children: "phrasing",
      attributes: "globals"
    },
    "code": {
      children: "phrasing",
      attributes: "globals"
    },
    "col": {
      children: "empty",
      attributes: "globals; span"
    },
    "colgroup": {
      children: "col",
      attributes: "globals; span"
    },
    "menuitem": {
      children: "empty",
      attributes: "globals; type; label; icon; disabled; checked; radiogroup; command"
    },
    "data": {
      children: "phrasing",
      attributes: "globals; value"
    },
    "datalist": {
      children: "phrasing; option",
      attributes: "globals"
    },
    "dd": {
      children: "flow",
      attributes: "globals"
    },
    "del": {
      children: "transparent",
      attributes: "globals; cite; datetime"
    },
    "details": {
      children: "summary*; flow",
      attributes: "globals; open"
    },
    "dfn": {
      children: "phrasing*",
      attributes: "globals"
    },
    "dialog": {
      children: "flow",
      attributes: "globals; open"
    },
    "div": {
      children: "flow",
      attributes: "globals"
    },
    "dl": {
      children: "dt*; dd*",
      attributes: "globals"
    },
    "dt": {
      children: "flow*",
      attributes: "globals"
    },
    "em": {
      children: "phrasing",
      attributes: "globals"
    },
    "embed": {
      children: "empty",
      attributes: "globals; src; type; width; height; any*"
    },
    "fieldset": {
      children: "legend*; flow",
      attributes: "globals; disabled; form; name"
    },
    "figcaption": {
      children: "flow",
      attributes: "globals"
    },
    "figure": {
      children: "figcaption*; flow",
      attributes: "globals"
    },
    "footer": {
      children: "flow*",
      attributes: "globals"
    },
    "form": {
      children: "flow*",
      attributes: "globals; accept-charset; action; autocomplete; enctype; method; name; novalidate; target"
    },
    "h1": {
      children: "phrasing",
      attributes: "globals"
    },
    "h2": {
      children: "phrasing",
      attributes: "globals"
    },
    "h3": {
      children: "phrasing",
      attributes: "globals"
    },
    "h4": {
      children: "phrasing",
      attributes: "globals"
    },
    "h5": {
      children: "phrasing",
      attributes: "globals"
    },
    "h6": {
      children: "phrasing",
      attributes: "globals"
    },
    "head": {
      children: "metadata content*",
      attributes: "globals"
    },
    "header": {
      children: "flow*",
      attributes: "globals"
    },
    "hr": {
      children: "empty",
      attributes: "globals"
    },
    "html": {
      children: "head*; body*",
      attributes: "globals; manifest"
    },
    "i": {
      children: "phrasing",
      attributes: "globals"
    },
    "iframe": {
      children: "text*",
      attributes: "globals; src; srcdoc; name; sandbox; seamless; allowfullscreen; width; height"
    },
    "img": {
      children: "empty",
      attributes: "globals; alt; src; crossorigin; usemap; ismap; width; height"
    },
    "input": {
      children: "empty",
      attributes: "globals; accept; alt; autocomplete; autofocus; checked; dirname; disabled; form; formaction; formenctype; formmethod; formnovalidate; formtarget; height; list; max; maxlength; min; multiple; name; pattern; placeholder; readonly; required; size; src; step; type; value; width"
    },
    "ins": {
      children: "transparent",
      attributes: "globals; cite; datetime"
    },
    "kbd": {
      children: "phrasing",
      attributes: "globals"
    },
    "keygen": {
      children: "empty",
      attributes: "globals; autofocus; challenge; disabled; form; keytype; name"
    },
    "label": {
      children: "phrasing*",
      attributes: "globals; form; for"
    },
    "legend": {
      children: "phrasing",
      attributes: "globals"
    },
    "li": {
      children: "flow",
      attributes: "globals; value*"
    },
    "link": {
      children: "empty",
      attributes: "globals; href; crossorigin; rel; media; hreflang; type; sizes"
    },
    "main": {
      children: "flow*",
      attributes: "globals"
    },
    "map": {
      children: "transparent; area*",
      attributes: "globals; name"
    },
    "mark": {
      children: "phrasing",
      attributes: "globals"
    },
    "menu": {
      children: "li*; flow*; menuitem*; hr*; menu*",
      attributes: "globals; type; label"
    },
    "meta": {
      children: "empty",
      attributes: "globals; name; http-equiv; content; charset"
    },
    "meter": {
      children: "phrasing*",
      attributes: "globals; value; min; max; low; high; optimum"
    },
    "nav": {
      children: "flow",
      attributes: "globals"
    },
    "noscript": {
      children: "varies*",
      attributes: "globals"
    },
    "object": {
      children: "param*; transparent",
      attributes: "globals; data; type; typemustmatch; name; usemap; form; width; height"
    },
    "ol": {
      children: "li",
      attributes: "globals; reversed; start; type"
    },
    "optgroup": {
      children: "option",
      attributes: "globals; disabled; label"
    },
    "option": {
      children: "text*",
      attributes: "globals; disabled; label; selected; value"
    },
    "output": {
      children: "phrasing",
      attributes: "globals; for; form; name"
    },
    "p": {
      children: "phrasing",
      attributes: "globals"
    },
    "param": {
      children: "empty",
      attributes: "globals; name; value"
    },
    "pre": {
      children: "phrasing",
      attributes: "globals"
    },
    "progress": {
      children: "phrasing*",
      attributes: "globals; value; max"
    },
    "q": {
      children: "phrasing",
      attributes: "globals; cite"
    },
    "rp": {
      children: "phrasing",
      attributes: "globals"
    },
    "rt": {
      children: "phrasing",
      attributes: "globals"
    },
    "ruby": {
      children: "phrasing; rt; rp*",
      attributes: "globals"
    },
    "s": {
      children: "phrasing",
      attributes: "globals"
    },
    "samp": {
      children: "phrasing",
      attributes: "globals"
    },
    "script": {
      children: "script, data, or script documentation*",
      attributes: "globals; src; type; charset; async; defer; crossorigin"
    },
    "section": {
      children: "flow",
      attributes: "globals"
    },
    "select": {
      children: "option; optgroup",
      attributes: "globals; autofocus; disabled; form; multiple; name; required; size"
    },
    "small": {
      children: "phrasing",
      attributes: "globals"
    },
    "source": {
      children: "empty",
      attributes: "globals; src; type; media"
    },
    "span": {
      children: "phrasing",
      attributes: "globals"
    },
    "strong": {
      children: "phrasing",
      attributes: "globals"
    },
    "style": {
      children: "varies*",
      attributes: "globals; media; type; scoped"
    },
    "sub": {
      children: "phrasing",
      attributes: "globals"
    },
    "summary": {
      children: "phrasing",
      attributes: "globals"
    },
    "sup": {
      children: "phrasing",
      attributes: "globals"
    },
    "table": {
      children: "caption*; colgroup*; thead*; tbody*; tfoot*; tr*",
      attributes: "globals; border"
    },
    "tbody": {
      children: "tr",
      attributes: "globals"
    },
    "td": {
      children: "flow",
      attributes: "globals; colspan; rowspan; headers"
    },
    "template": {
      children: "flow; metadata",
      attributes: "globals"
    },
    "textarea": {
      children: "text",
      attributes: "globals; autofocus; cols; dirname; disabled; form; maxlength; name; placeholder; readonly; required; rows; wrap"
    },
    "tfoot": {
      children: "tr",
      attributes: "globals"
    },
    "th": {
      children: "flow*",
      attributes: "globals; colspan; rowspan; headers; scope; abbr"
    },
    "thead": {
      children: "tr",
      attributes: "globals"
    },
    "time": {
      children: "phrasing",
      attributes: "globals; datetime"
    },
    "title": {
      children: "text*",
      attributes: "globals"
    },
    "tr": {
      children: "th*; td",
      attributes: "globals"
    },
    "track": {
      children: "empty",
      attributes: "globals; default; kind; label; src; srclang"
    },
    "u": {
      children: "phrasing",
      attributes: "globals"
    },
    "ul": {
      children: "li",
      attributes: "globals"
    },
    "var": {
      children: "phrasing",
      attributes: "globals"
    },
    "video": {
      children: "source*; transparent*",
      attributes: "globals; src; crossorigin; poster; preload; autoplay; mediagroup; loop; muted; controls; width; height"
    },
    "wbr": {
      children: "empty",
      attributes: "globals"
    }
  }
}
