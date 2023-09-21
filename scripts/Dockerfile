#18.10.0-alpine3.15
FROM node@sha256:67477719e587d52c68c5e8f0bc98ad0da6e99bdfd090d8596f6d760ccabc36f4

WORKDIR /app/scripts

COPY . /app/scripts

RUN npm install
RUN npm install sharp@0.31.1 @types/sharp@0.30.0 ethers@5.7.1

ENTRYPOINT [ "npx", "--no-install", "ts-node" ]
CMD ["./processAndDownloadAlchemyNFTs.ts"]
