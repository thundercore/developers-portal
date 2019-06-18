# Yell Messages
## Motivation
The purpose of yell messages is to provide a mechanism for censorship resistance, in case of an evil 
accelerator.  The intent is to allow other nodes (committee nodes, full nodes) to observe these yell 
transactions, and if a node determines that the tx was valid, but not put into a ThunderCore block, 
to determine that the accelerator is censoring some transactions.

## Specification: 
Yell messages are posted on Ethereum by chain users to an address that is specific to a particular 
Thunder chain. Yell messages are regular 0-value Ethereum transactions, with an rlp encoded signed 
fast-path transaction in the payload field.  The sender must have enough Ethereum gas to send the 
message, and the enclosed Thunder tx must be signed by an account having sufficient Thunder gas for 
the transaction.  

The purpose of yell messages is to provide a mechanism for censorship resistance, in case of an evil 
accelerator.  The intent is to allow other nodes (committee nodes, full nodes) to observe these yell 
transactions, and if a node determines that the tx was valid, but not put into a fastpath block, to 
determine that the accelerator is censoring some transactions.

If a user cannot submit a yell transaction due to lacking gas, can't figure out the right nonce, 
connectivity problems, etc, then that user will not be able to submit transactions to the 
accelerator via Ethereum, but Ethereum is out of ThunderCore's control, thus it cannot prevent any 
user from posting yell messages.

The expected use case of yell messages is for situations where the user feels that their 
transactions that have already been submitted to ThunderCore are being ignored.  Submitting 
transactions via yell messages requires Ethereum gas as well as Thunder gas, so is less desirable 
than submitting transactions directly to ThunderCore.  If the user submits the same transaction
both directly and via a yell message, the first received will be accepted (most likely the one sent 
via ThunderCore) and the second will be rejected due to its having a duplicate nonce value.

## Forming yell messages
To create a yell message, first create the ThunderCore transaction that will be sent in the yell
message in RLP-encoded form.  Then create an Ethereum transaction, specifying the yell target 
address as the destination address, and use the ThunderCore transaction as the Ethereum
transaction's data.

Yells should be sent to the following addresses:

| Thunder Chain | Ethereum Chain | Address |
|---------------|----------------|---------|
| Testnet       | Ropsten        | 0xD5c59CB1C7A0D7B899e054706B46E0B752770bE3|
| Mainnet       | Mainnet        | 0xD5c59CB1C7A0D7B899e054706B46E0B752770bE3|

