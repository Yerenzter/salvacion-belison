export default function Button({ click, dismiss, label='No label', props, target, toggle, type }) {
  let attr = `btn ${ props }`;
  let targetData = `#${ target }`;
  return (
    <button className={ attr }
      onClick={ click }
      type={ type }
      data-bs-toggle={ toggle }
      data-bs-dismiss={ dismiss }
      data-bs-target={ targetData }>
      { label }
    </button>
  );
}
