'use strict';

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce that a variable named `foo` can only be assigned a value of 'bar'."
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
