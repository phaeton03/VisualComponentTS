console.log("babeled");

module.exports = () => {
    return {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        +    '@babel/preset-typescript',
      ],
    }
}
