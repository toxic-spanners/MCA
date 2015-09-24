module.exports = require('../getResource')([
    require('./BlockStatement'),
    require('./BreakStatement'),
    require('./ContinueStatement'),
    require('./DoWhileStatement'),
    require('./EmptyStatement'),
    require('./ExpressionStatement'),
    require('./ifStatement'),
    require('./MacroStatement'),
    require('./ReturnStatement'),
    require('./SwitchStatement'),
    require('./WhileStatement'),

    require('./AssignmentExpression'),
    require('./BinaryExpression'),
    require('./CallExpression'),
    require('./ComparisonExpression'),
    require('./ImportExpression'),
    require('./InternalCallExpression'),
    require('./KeyValueExpression'),
    require('./LogicalExpression'),
    require('./MapExpression'),
    require('./MathExpression'),
    require('./MemberExpression'),
    require('./OutExpression'),
    require('./ShiftExpression'),
    require('./UnaryExpression'),

    require('./Identifier'),
    require('./OutIdentifier'),
    require('./Program'),
    require('./CommandLiteral'),
    require('./NullLiteral'),
    require('./NumberLiteral'),
    require('./StringLiteral')
]);