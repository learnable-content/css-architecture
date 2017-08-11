const $container = document.querySelector( '.js-container' );

for ( let i = 1; i <= 5; ++i ) {
  document.querySelector( `.js-${i}em` ).addEventListener( 'click', () => {
      $container.style.height = `${i}em`;
  } );  
  document.querySelector( `.js-${i * 18}pt` ).addEventListener( 'click', () => {
      $container.style[ 'font-size' ] = `${i * 18}pt`;
  } );    
  
}