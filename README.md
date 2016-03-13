# perk-cli
Command link tool for bootstrapping perk apps

## To install

`npm install -g perk-cli`

## To use

```
perk my-perk-app
```

This will create the basic file structure for your new app inside of the `my-perk-app` directory and give you instructions on what to do next.

##NOTE:
This perk-cli tool needs native Promis support. Make sure you use a version that supports [ES6 native promises](http://www.html5rocks.com/en/tutorials/es6/promises/).
I suggest using a tool like [nvm](https://github.com/creationix/nvm) if you have to.

More info can be found here: http://stackoverflow.com/questions/21564993/native-support-for-promises-in-node-js