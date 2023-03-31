const CCRT = `MIIEFjCCAv4CFG6Pv9eR6otAmlrPdHjqjV4K7F5NMA0GCSqGSIb3DQEBCwUAMEgx
CzAJBgNVBAYTAlVTMRMwEQYDVQQIDApTb21lLVN0YXRlMRAwDgYDVQQKDAdCZWFy
bWF4MRIwEAYDVQQDDAlsb2NhbGhvc3QwIBcNMjMwMjA3MTg0MjU5WhgPMjA1MDA2
MjQxODQyNTlaMEUxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApTb21lLVN0YXRlMRAw
DgYDVQQKDAdCZWFybWF4MQ8wDQYDVQQDDAZEZXZCb3QwggIiMA0GCSqGSIb3DQEB
AQUAA4ICDwAwggIKAoICAQC3OwBGW+4ViuFyk+r5XgGapGZjMtniiUfwq7gNarT4
qlLEWHKi1jzKTTKil49Mqz1PIHyqte+60CeYF9veMEJ94VF+7CxVuwdLAVng/YhC
cutljJNkmWiDNMzrLRL1ScZ0l21TW1HXnoGAA8Fz2DO6NoYGXzwYuU1nHCxk1TKh
P/Ycimx2rj5kDfRZzuOA+1//OkyMq62zPoUjro8Zwpfv7tBDftad15kJe+RAz5up
2AM8903tcUohiOYhxlvL1QbrcojK4tpbRXgwBNedBOsIJ2EbagPI2MGW3X9C5uwn
vU1GHIoJ1kbzrDlaEwsfi0g3Y8CQBF1kbA0fLQ0BFEZxEnXqjKIiGqxlhbx3Ij8D
IvFoVLOVLlFNaoJr+VsxxF4Z/2783Co7pqYKGPWs7kzh0mdppnML3fVctJ64LR3z
JuMR85q4czDDkPfAPoMQ+/36up3/3Q2jeITAIp+q2dNb1fQyZBfZN72xq45f/hki
0hWCDyUrk0+u6I/usGkDDE41asXl36M4bOqxvRraKkqHuuRm7Tzq+RAPIcyO+fbc
NXdcxM8pLjhJI0bdZnwKGLW0jRm1Wzm6TnC51lW1j3HlXzRXcih9k1n4qhd7HHeM
rVosUNy6JnMC9J9mmEskQ0nmqil5bpB4zKYniTJuarke0DFUmfDTwE/wWimfWj8t
jQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQCc9nqba2BWeW1FGzHMfHKwISJz3lOJ
ipTZbIHrR11zQs4tQUL2DdEb3rYCNVmuO9dSHI2EIwSfXgANcs3Wg3WJGY+pANvZ
WjLK0brceWj1qMoMWy/4Bk9ez2m1mDPCn2cLSbJHdQGVx+lP0QfM70gLDQfDOu8T
gIF95k8pmOZl+X6QGR8Hq6Lq7K6+QCgFgNEyK86GwQ585t4k6DqFaftZTSPuISct
s+oFOmDBHDDA3OSiG8/I7AX+R5bA0Ry8FCVJBCw4o6/qnu9Ifm8e5ArtLykm2R7g
v0DsMEQRMYd4+ABfsQo9ocvIT2sYoczNc0PUaS+VnvWzcnqR+wC1LNOq
`;

const CKEY = `MIIJKgIBAAKCAgEAtzsARlvuFYrhcpPq+V4BmqRmYzLZ4olH8Ku4DWq0+KpSxFhy
otY8yk0yopePTKs9TyB8qrXvutAnmBfb3jBCfeFRfuwsVbsHSwFZ4P2IQnLrZYyT
ZJlogzTM6y0S9UnGdJdtU1tR156BgAPBc9gzujaGBl88GLlNZxwsZNUyoT/2HIps
dq4+ZA30Wc7jgPtf/zpMjKutsz6FI66PGcKX7+7QQ37WndeZCXvkQM+bqdgDPPdN
7XFKIYjmIcZby9UG63KIyuLaW0V4MATXnQTrCCdhG2oDyNjBlt1/QubsJ71NRhyK
CdZG86w5WhMLH4tIN2PAkARdZGwNHy0NARRGcRJ16oyiIhqsZYW8dyI/AyLxaFSz
lS5RTWqCa/lbMcReGf9u/NwqO6amChj1rO5M4dJnaaZzC931XLSeuC0d8ybjEfOa
uHMww5D3wD6DEPv9+rqd/90No3iEwCKfqtnTW9X0MmQX2Te9sauOX/4ZItIVgg8l
K5NPruiP7rBpAwxONWrF5d+jOGzqsb0a2ipKh7rkZu086vkQDyHMjvn23DV3XMTP
KS44SSNG3WZ8Chi1tI0ZtVs5uk5wudZVtY9x5V80V3IofZNZ+KoXexx3jK1aLFDc
uiZzAvSfZphLJENJ5qopeW6QeMymJ4kybmq5HtAxVJnw08BP8Fopn1o/LY0CAwEA
AQKCAgEArTRh0yDNk6Gf8c5vvWAmxgcIHleQbbt1vMSmjFBFWBaxfJdbbiB0gIuv
BNGeDUyF/Qlpr3mibwablwNevM8D27ilcARS+It+nmFdk/g12RKHAIx9PAhkKjs8
Rkdqd2JQ7h/CoZxeZiOYqOlj8lz6sNkfomBeD8UCrSiNspdyb8llnZ8gXqPhqHUk
ecy/dEqreTmj6QnUfe7ork0xSpmPRKiMSHFa8QQ/zx5FKxrVPB1NGlFwYbbI66Bc
Yqr+VVU/YEv5kUgWP1cRANti8jQW9LM88Uwq3a5AeZtR1G0z6XDh3hfWSOw8T9WK
tWHxDtV745gxDDKEEgyt7r2IYG/JETixSy822JubvXMz3kn8GIczQwlQlImJ/GwJ
wBVuIE4H4vjzqkV5wVhJj75bF1H2UyfEB28Gcwsr+Admg9V1b6yY1YvvA4OAV4xB
ihKPPeQBB80t4yqWCOytP9VK7R5tDyA8tWyrf+wruJpsqqVJpA13bVDXvcqa83Zo
HXUs2qrajN7/Z59XWY1T83oQRUQ2BsmcQJILjn8sqTJVTI/wnVTb/kwczPdpCIsf
ZoReTkNaG9I/uUp5U9vNjFs12MXvX1TY0tL0NC9CaokzhuMnwuQxIMvCZ8XTfxvj
vpsgCHnOU6OdgaOtihqrkA+yd6SctIqBHZnGqOBvz9PZo8ECiEECggEBAO3Dj5ip
n+Fmz4j88pZGMLu/bk4DVZLCVtowJhA1CQ95EOTCIMfrp2pKkHNPeELyvWXVapLj
haKeXkGwbShroYzk5w322Tgux8nZ17swBNu0onHLnDKrfUQOG7PwP7EeCgbUNxRs
KWLwyX+CfIYbiILBC6bWnMoBC4ExlOYJmw+3+BlTUeRkO++7H7S+P1PXPJtuUN2H
0E78mNBEpBWuZyu8UT1Hn+qksv5t4fBlLXz0o6KmWry7IS+Y2aE8DcuGMwLI6Awy
LofafInUNTNyachTAxfhxNG0Wx62AE8vZKab17cchDWfnrdGdSMTqQimjaPY0Af+
qKlNeprzRrsS9RECggEBAMVIsFUbyW8JJHxW+yHGQciqI4dOzivjolOmd9lL9EAl
7/sBvYQZ/QBymXIIjCmKpIALiONpXc2Ol9rX7qUi1AqhARqbCQjqqA8hSYBycEaF
4kLSsZUMKYp33yM/OqgindeWq8NOGJpXnu9K0rqdT4CgUvv5a+mW+l/xzugrXVwO
/7HvguqEw8QrGaAt5WcstJ4qZwMIfNDZRhUKURhJivhk8Z6VR6aFL4WUrlZHlDU0
nNiqxR65tqIAL4tejq3VPJCX6qQP7J/CG0ujpnquTuqMc9X4OHWSE57wu3pCaoIN
XSdFFfp3zzw/ap2dYhvCkb0NUFBCBKWPA8zZ4BA8QL0CggEBALcmJE/xoeGsI4Of
bXKKgPGuxVY8xUc2glayLi/f2qnblULRsxStFxoOc/UPK1FO0MxHuD+MGZ2ppmut
bnhraFcy4DTmiG75whZfwwlDNQrUuykzMY/qf6TTxU03bKiPviOChycpJjw7xMt/
BVL8lIw8DjCnMsF8SpNrUQpeLd7O1MMVZoirGWxSVVsSDZAUxW/pa0sqWjDt7PzJ
UygMXxbWijHNIYdK9UJ9/EQEfCS8AezBfjXRY//ZGxNTQkEbj+G+RtlWMnedur8l
AxItOQUBxOk5lTYAWwxuIBDfLgYVF/bKdaEk4srE8GhjtZqfSY4D7kOqS9uWfjIr
4bkrIjECggEAMoGbcw58EUsb5iE2hb0F1mOIWPmZ2q6aPiQeBqllTI7p0y7s38bv
eI/eLM13ZKMz3fwV/XJaK2fYBJTHacty0Y3KhI8wTvIUOFtjP9kMWWGpPUZHZEsK
z4JEw/dKAwVpt2nBa2yw68KG0+gp7tCbK+jfldaTA+g9DRcQy2teqVTFrT4OHBAF
NlF6bAGT+0f8rYlZefNQUP9u67AKdtdNFq5xFRJOl5j9Q4t+3mPQ05Y2mVmOwYD1
+p9ljJ6WlHZE3RenYH0bLQM6jbDFzB6X4YA3n42+lorhLw2eUXxzW/wj3wvWxpqp
mVj66IMEPOsg+G9SIlnkaqYkaOtWa5GhWQKCAQEAyia+4XLp6IMcW3u4rOQo5L+/
hrKwfvkn0dGh6uOKI37wLpOFjYxfoJzhg3MjXq9Ff8BRubQaBfWC3pYjzbZ9IFDv
Xubwe1soIFDGYNohyvnP2HaGQL9nuT1SHn+FDJcS/hbj4rsmD2hEvu0RQKT4pFYH
zcPVEYIKeRUbc9ndBHc16FAxikLJarrMX/bQ7XS7YJLENINrYyBu44Vc3yq8lI/w
qf8QjIoRBLRWYuTSICR/lrxEQH5PQlo1HFlxX7dlzfYJ+zcgaPiIPSRA4dQemzzy
N2Tl6vuDr00CkrqpiIu1efIOkzHAkLNXLJx/oMmUspoWfFCAui/Y+gM0tW9tNQ==
-----END RSA PRIVATE KEY-----
`;

const SCRT = `MIIEGTCCAwECFG6Pv9eR6otAmlrPdHjqjV4K7F5MMA0GCSqGSIb3DQEBCwUAMEgx
CzAJBgNVBAYTAlVTMRMwEQYDVQQIDApTb21lLVN0YXRlMRAwDgYDVQQKDAdCZWFy
bWF4MRIwEAYDVQQDDAlsb2NhbGhvc3QwIBcNMjMwMjA3MTgzNTQxWhgPMjA1MDA2
MjQxODM1NDFaMEgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApTb21lLVN0YXRlMRAw
DgYDVQQKDAdCZWFybWF4MRIwEAYDVQQDDAlsb2NhbGhvc3QwggIiMA0GCSqGSIb3
DQEBAQUAA4ICDwAwggIKAoICAQDGQldARU91BybCGS57u74Xh1e1udfr50kQnqC4
WKXZdV5Ta8TIvcgpIdXZVdfPR25gzuS5/QewRUTlhoBjs/96+DZUV7rEbLdAcFqM
5MYP0zUijWW8SOYVd8vM4Cgj2y6bvOw+YBZlKQVS+TmLgkb9fxVx1+tbdPv9mjle
s85ynXRl1fBom8TdLp/+EZCgcEU/61CUkcFme1l2NTepAa+9+S6fDypsmq8xRiQp
VRpeg7NgubiPf+CBvabg4qImQZFNfRZJ2ce6lJnZPNUcxtPwa7RG6qgQd6VGniuD
rYRa1uznJbuqk/DDRTTQYAQjMziwtkWdpmfpbGvbbVuFvgOm6gsCPmMQ4pYlG6U8
bm/jRfDjR1DHGrk3KuMfEtsj31yKXwULCzf3V7i8Rs5QRGC7A0DgF6McCf0bdN+B
qolBbn0T5JmOKsncBrKJfjioKHpEtcIwVoiQptjSsFh3dqpSODZ0oOoZD4LyU+zr
jFMbfcQeY7Nmi4k0O8vn9OqApOymI/UhrLJco6At4TgldDjbTz5tPj55VUqnHGb+
z7TwS8r67r0d6Vwru3LlkN/0BX4iTdkloAKiQnV+wMk5Oi1OwBVv8qRQv0wRvdQS
E+G2BuV8PcnYzcgf8WcuL9ezAeUghI2UisBOxMJzxIoFaM6m/Hbsv3B3EaQbtLs3
8IBdtQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQCfbxx7+RVgFh8AkpAeU5/CVTLs
Ejm8meVszjNCAlV4SHJX+oJJkmX+SANJjZyFMW+6NJoZOOz2Jl124771/x9OxIgt
3LB/z2vklgxetIslohaf221jAbaDK+7O92s7So1l2JUyKMxse5WEzTCyzK5Gf8pb
KTcfNTasgYD5oByZFVxHWtOxDfKu2ej899HlbXfw9VnEgDA3mzLw/BJbHAac3mEG
qkQ28cEcZ/ylr/z3PlCqN6Ilnk2sprcp+O3dqf/tAutBV94aUD6UmQwC++X7C8Og
9lWf1HNcrWW081Vp9OH0UDCtFf8Bd3N27rtajPf/6TBiF/+GdgVvu3U4KRgo
`;

export { CCRT, CKEY, SCRT };
