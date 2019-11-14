module.exports = {
  template({ template }, _, { componentName, jsx }) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })
    return typeScriptTpl.ast`
    import React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `
  }
}
