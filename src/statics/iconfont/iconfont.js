import {
  createGlobalStyle
} from 'styled-components'

const GlobalStyle = createGlobalStyle `
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1548699089668'); /* IE9 */
    src: url('./iconfont.eot?t=1548699089668#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARkAAsAAAAACMwAAAQXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEZIQWATYCJAMUCwwABCAFhG0HUBuqB8gOJSHBwMBgiGBIPPy39nrfzOxmMz/ALlGAMh5YhqtZRRWFrmqPR9vaSjayqpKN2PnPTT9SSzavSWougYkhP2mKhBdSMR/Q+mmmBjO/iZ70j3unzfMsnM+ynOaYVp/+BRgHlIVjTN6YpgUSmLcMr3WpC9pNoFrgh3OQkVcGTBVkUCBuKFIETGNapYQUOkWbM7OIl8BIl55zbwLghfv9+A9CwpSkycjI0wfpUpD0y+7j+9zyv8UaGwN4/ZnBziNjE1CIh7nWGzw/uomnyu35dgBVJ0l9tfL7GPHxfd8TClckrzpvLX+8LBEtIh0B4k6s8MvOZBL88uPmySJALYPsPcQknJedCoFPgF2XL7o3SpIiTSy3XGDazaLuztUanZVQp7UUaDeal23UWKzR6axWxzUrNqbPsaoXnDFw9Prrhw8vHz266jck4pr+HdOMwXBLZEvP0+vHkesFZYgMXblK64jMWK8QnUD7AahRvyN9tzmtQmEr0heHH9wKWt6j/Rc4nNt92qlpK18k1hesp9uyadL8IXj4aICua+ePWOAaC83EmGRy8267coP+EvHWtGztm414epYvcmjW3At99EjL5ca5tuQ2Vx+huVeIKjJ4zNxXuNw7WYG41rtenzD3SqEjUtrMr2vN4/jYG7MqEPku5swZIzcYw+3dv7/XEnEZHbc3HB0D3YrOnJmwCXU4PcKVjYzIsJo74lfg9wNnicx7Xmn34KL/4lR9RUIhzk0RUwkG/u8ENXspKpBjtBtAewuohWvR3KSY9+uE7A0bi9+27t/cHcH/fPQ3E0pu508/ffqKCi6r3zy0Uu6VJgDNH/c387e/0Kx8geOh7tGhVWX4pB0nCGvxSC0rWP9AE+B9mLQLs58U4FNmUzj+fIXmxQn+FOgilwwsmQc1yBbpJ88XgP5PbuYB+v/5rBvfn2t4xX/Gb1yOck/WL477ZYoW8KOSuAfufn8B9aTg9crU5v0HvJqoogiIrilStcmVbI2jiFaS0fUGJpnysh/5bO18Qmc2hGTIPGSdRWwhbkJjYAtanW2oNmTOH5jG4IkyjHWdCMKEPZCM+QbZhFvYQnwBjTmfoDURPKiuY/mKA8tBIakMFLFQiolrMUpCKwnDwCJeYQkkK+UiJipwKQLIqKkAFhwQlExkQiVk+hijriJDWJbACIZWYBloPyiX05iKoSughA0oZ1lVTGAgkXehAAmtAIh9DEiEBUlhxGphKBI0JcKuz0JSny8BkSrJiTAliDKrAMRQo5rHBAsQVAObKVXWQpxLe7UqpBAsFkH1IzBoCpgMMENyPUrDqPK7VYAkWAHKW4RVYgTiWkRdacD4csU1boCKnNxEihwlmmjVZ5ASUyKapYIRQqQkpaIKyi7jJotM8miRNNAAAAA=') format('woff2'),
    url('./iconfont.woff?t=1548699089668') format('woff'),
    url('./iconfont.ttf?t=1548699089668') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1548699089668#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default GlobalStyle