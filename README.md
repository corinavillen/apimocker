# apimocker
This is a node.js module to run a simple http server, which can serve up mock service responses.
Responses can be JSON or XML to simulate REST or SOAP services.

## Installation
```
$ git clone https://github.com/corinavillen/apimocker
$ cd apimocker/
$ sudo npm install
$ grunt run
```

## Usage

Then you can visit "http://localhost:7878/v3/products/details/04641153000P" in your browser to see it work.
The quiet and port options can also be set in the config.json file,
and values from config.json will override values from the command line.

## Configuration
On startup, config values are loaded from the config.json file.
During runtime, mock services can be configured on the fly.
See the sample config.json file in this package.

* Services can be configured to return different responses, depending on a request parameter.
* Content-type for a service response can be set for each service.  If not set, content-type defaults to application/xml for .xml files, and application/json for .json files.
* HTTP Status code can be set for each service.
* Latency (ms) can be set to simulate slow service responses.  Latency can be set for a single service, or globally for all services.
* Allowed domains can be set to restrict CORS requests to certain domains.
* Allowed headers can be set.  (Default is to set "access-control-allow-headers: Content-Type" if not specified in config file.)
* config.json file format has changed with the 0.1.6 release.  See below for the new format.  (Old config.json file format is deprecated and doesn't support new features, but still functioning.)
* mockDirectory value should be an absolute path.
* A static route can be opened up to serve up static assets like images.  Both staticDirectory and staticPath must be set.  If either is not set, then nothing happens.
* Additional headers can be defined for responses.
