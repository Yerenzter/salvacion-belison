export default function Input({ change, id, label='No label', name, type='text', props, readonly=false }) {
  let attr = `form-control ${ props }`;
  return <input id={ id }
    onChange={ change }
    className={ attr }
    name={ name }
    type={ type }
    readOnly={readonly}
    placeholder={ label } />
}
