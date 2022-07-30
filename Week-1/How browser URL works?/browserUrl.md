# How browser URL works?

## _Browser -> Operating System -> ISP -> Server -> Service running on the server_


```
    1. You type a URL in your browser and press Enter
    2. Browser looks up IP address for the domain
    3. Browser initiates TCP connection with the server
    4. Browser sends the HTTP request to the server
    5. Server processes request and sends back a response
    6. Browser renders the content

```

1. **You type https://devsam.xyz/ in your browser**
  
    https:// is the scheme. Hyper Text Transfer Protocol Secure
    makes connection to the server using Transport Layer Security; TLS
    With HTTPS, the data exchanged betweem your browser and the server, password, user info etc

    devsam.dev is the domain, an address that points to a specific server's IP address


![IP address points to an insatance stored on Server](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/08/11/amazon-lightsail-console-cdn-distribution.png)


 2. **Browser looks up IP address for the domain**
     
    Once you press enter, browser needs to figure out which server on the internet to connect to;
    this is done by DNS lookup, which asks multiple DNS server servers arounf the internet untill it is found.

    Ones the browser gets the DNS record with the IP address, it's time for it to find the server on the internet and establish a connection.



 3. **Browser initiates a TCP (https) connection with the server**

    Using the public internet routing, packets from client browser get routed through the router -> ISP -> all using TCP (Transmission control protocol)

    Instead many browser uses CDN to catche static and dynamic content closer to the browser region.
    A CDN is a globally distributed network of caching servers that improve the performance of your site 

    Ones a browser finds the server on the internet, it establish a TCP connection with the server and if HTTPS is eing used, it handshakes with the secure communicatio.

    TLS (Transport Layer Security) a sequrity layer sits on top of TCP to allow secure connection. It encrypts data before reaches TCP and decrypts after being handed over on yhe other end.

 4. **Browser sends the HTTP request to the server**

   Now that the browser has connection with the server, it follows the rule of communication HTTPs protocol.

   Startes with browser sending HTTP request to the server to request the content of the page.
   Request line contains 
   - a request meathod GET, POST, PATCH, DELETE, PUT
   - path pointing to the requested resource
   - HTTP version to communicate the request

   `GET /hello-world HTTP/1.1`

 5. **Server processes the request and sends the response back**
    The server takes the request and based on the info in the request line, headers, and body, decides how to process the request.


 6. **Browser renders the content**
     Once the browser has received the response from the server, it inspects the response headers for information on how to render the resource


```
    1. You type a URL in your browser and press Enter
    2. Browser looks up IP address for the domain
    3. Browser initiates TCP connection with the server
    4. Browser sends the HTTP request to the server
    5. Server processes request and sends back a response
    6. Browser renders the content

```