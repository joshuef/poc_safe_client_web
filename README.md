If you build `safe_network` with `websockets` it should be able to communicate with a browser version as things stand.

## Building for the browser

Install wasm-pack https://github.com/rustwasm/wasm-pack

`cd sn_client && wasm-pack build`

that will give you a `pkg` folder inside `sn_client`. 

Copy that to this repo, oevrwriting what's there and then

`npm install`

`npm start`

to launch a server serving the wasm page.


Thereafter in the browser console eg:

```
await safe.get_data("/ip4/127.0.0.1/tcp/59324/ws/p2p/12D3KooWG6kyBwLVHj5hYK2SqGkP4GqrCz5gfwsvPBYic4c4TeUz","9d7e115061066126482a229822e6d68737bd67d826c269762c0f64ce87af6b4c")`

the first being a safenetwork node peerid, the second a data address you have put.


## WARNING

This is a rough POC. Errors will explode up in the browser window, the safe client runs continually and may eat all your ram, buttt, you should also see `Data found` logged in the console (you may want to filter for it).

That's the demo part...