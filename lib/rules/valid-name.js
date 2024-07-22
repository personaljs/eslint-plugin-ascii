'use strict';

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "ESLint plugin to detect non-ascii characters in JavaScript source code."
        },
        fixable: "code",
        schema: []
    },
    create(context) {
        return {
            Identifier(node) {
                let name = node.name;

                let matches = name.match(/([^\x00-\x7F]+)/g);

                if (matches) {
                    context.report(node, {
                        line   : node.loc.start.line,
                        column : node.loc.start.column,
                    }, `Non-ascii character ${matches} found in ${name}`);
                }
            }
        };
    }
};
