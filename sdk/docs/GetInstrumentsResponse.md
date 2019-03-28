# LusidSdk.GetInstrumentsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **String** |  | [optional] 
**values** | [**{String: Instrument}**](Instrument.md) | The instruments, keyed by their requested identifier. Only instruments that were found  will be contained in this collection. | [optional] 
**failed** | [**{String: ErrorDetail}**](ErrorDetail.md) | If any instruments were not found, then they will be listed in as &#39;Failed&#39;, along with the nature  of their failure. | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 


