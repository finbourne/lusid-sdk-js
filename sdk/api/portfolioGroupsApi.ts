/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](../../../api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application   | Description                                                                       | API / Swagger Documentation                          | |---------------|-----------------------------------------------------------------------------------|------------------------------------------------------| | LUSID         | Open, API-first, developer-friendly investment data platform.                     | [Swagger](../../../api/swagger/index.html)           | | Web app       | User-facing front end for LUSID.                                                  | [Swagger](../../../app/swagger/index.html)           | | Scheduler     | Automated job scheduler.                                                          | [Swagger](../../../scheduler2/swagger/index.html)    | | Insights      | Monitoring and troubleshooting service.                                           | [Swagger](../../../insights/swagger/index.html)      | | Identity      | Identity management for LUSID (in conjunction with Access)                        | [Swagger](../../../identity/swagger/index.html)      | | Access        | Access control for LUSID (in conjunction with Identity)                           | [Swagger](../../../access/swagger/index.html)        | | Drive         | Secure file repository and manager for collaboration.                             | [Swagger](../../../drive/swagger/index.html)         | | Luminesce     | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](../../../honeycomb/swagger/index.html)     | | Notification  | Notification service.                                                             | [Swagger](../../../notification/swagger/index.html)  | | Configuration | File store for secrets and other sensitive information.                           | [Swagger](../../../configuration/swagger/index.html) | | Workflow      | Workflow service.                                                                 | [Swagger](../../../workflow/swagger/index.html)      |   # Error Codes  | Code|Name|Description | | ---|---|--- | | <a name=\"-10\">-10</a>|Server Configuration Error|  | | <a name=\"-1\">-1</a>|Unknown error|An unexpected error was encountered on our side. | | <a name=\"102\">102</a>|Version Not Found|  | | <a name=\"103\">103</a>|Api Rate Limit Violation|  | | <a name=\"104\">104</a>|Instrument Not Found|  | | <a name=\"105\">105</a>|Property Not Found|  | | <a name=\"106\">106</a>|Portfolio Recursion Depth|  | | <a name=\"108\">108</a>|Group Not Found|  | | <a name=\"109\">109</a>|Portfolio Not Found|  | | <a name=\"110\">110</a>|Property Schema Not Found|  | | <a name=\"111\">111</a>|Portfolio Ancestry Not Found|  | | <a name=\"112\">112</a>|Portfolio With Id Already Exists|  | | <a name=\"113\">113</a>|Orphaned Portfolio|  | | <a name=\"119\">119</a>|Missing Base Claims|  | | <a name=\"121\">121</a>|Property Not Defined|  | | <a name=\"122\">122</a>|Cannot Delete System Property|  | | <a name=\"123\">123</a>|Cannot Modify Immutable Property Field|  | | <a name=\"124\">124</a>|Property Already Exists|  | | <a name=\"125\">125</a>|Invalid Property Life Time|  | | <a name=\"126\">126</a>|Property Constraint Style Excludes Properties|  | | <a name=\"127\">127</a>|Cannot Modify Default Data Type|  | | <a name=\"128\">128</a>|Group Already Exists|  | | <a name=\"129\">129</a>|No Such Data Type|  | | <a name=\"130\">130</a>|Undefined Value For Data Type|  | | <a name=\"131\">131</a>|Unsupported Value Type Defined On Data Type|  | | <a name=\"132\">132</a>|Validation Error|  | | <a name=\"133\">133</a>|Loop Detected In Group Hierarchy|  | | <a name=\"134\">134</a>|Undefined Acceptable Values|  | | <a name=\"135\">135</a>|Sub Group Already Exists|  | | <a name=\"138\">138</a>|Price Source Not Found|  | | <a name=\"139\">139</a>|Analytic Store Not Found|  | | <a name=\"141\">141</a>|Analytic Store Already Exists|  | | <a name=\"143\">143</a>|Client Instrument Already Exists|  | | <a name=\"144\">144</a>|Duplicate In Parameter Set|  | | <a name=\"147\">147</a>|Results Not Found|  | | <a name=\"148\">148</a>|Order Field Not In Result Set|  | | <a name=\"149\">149</a>|Operation Failed|  | | <a name=\"150\">150</a>|Elastic Search Error|  | | <a name=\"151\">151</a>|Invalid Parameter Value|  | | <a name=\"153\">153</a>|Command Processing Failure|  | | <a name=\"154\">154</a>|Entity State Construction Failure|  | | <a name=\"155\">155</a>|Entity Timeline Does Not Exist|  | | <a name=\"156\">156</a>|Concurrency Conflict Failure|  | | <a name=\"157\">157</a>|Invalid Request|  | | <a name=\"158\">158</a>|Event Publish Unknown|  | | <a name=\"159\">159</a>|Event Query Failure|  | | <a name=\"160\">160</a>|Blob Did Not Exist|  | | <a name=\"162\">162</a>|Sub System Request Failure|  | | <a name=\"163\">163</a>|Sub System Configuration Failure|  | | <a name=\"165\">165</a>|Failed To Delete|  | | <a name=\"166\">166</a>|Upsert Client Instrument Failure|  | | <a name=\"167\">167</a>|Illegal As At Interval|  | | <a name=\"168\">168</a>|Illegal Bitemporal Query|  | | <a name=\"169\">169</a>|Invalid Alternate Id|  | | <a name=\"170\">170</a>|Cannot Add Non-Writable Properties To Entity|  | | <a name=\"171\">171</a>|Entity Already Exists In Group|  | | <a name=\"172\">172</a>|Entity With Id Does Not Exist|  | | <a name=\"173\">173</a>|Entity With Id Already Exists|  | | <a name=\"174\">174</a>|Derived Portfolio Details Do Not Exist|  | | <a name=\"175\">175</a>|Entity Not In Group|  | | <a name=\"176\">176</a>|Portfolio With Name Already Exists|  | | <a name=\"177\">177</a>|Invalid Transactions|  | | <a name=\"178\">178</a>|Reference Portfolio Not Found|  | | <a name=\"179\">179</a>|Duplicate Id|  | | <a name=\"180\">180</a>|Command Retrieval Failure|  | | <a name=\"181\">181</a>|Data Filter Application Failure|  | | <a name=\"182\">182</a>|Search Failed|  | | <a name=\"183\">183</a>|Movements Engine Configuration Key Failure|  | | <a name=\"184\">184</a>|Fx Rate Source Not Found|  | | <a name=\"185\">185</a>|Accrual Source Not Found|  | | <a name=\"186\">186</a>|Access Denied|  | | <a name=\"187\">187</a>|Invalid Identity Token|  | | <a name=\"188\">188</a>|Invalid Request Headers|  | | <a name=\"189\">189</a>|Price Not Found|  | | <a name=\"190\">190</a>|Invalid Sub Holding Keys Provided|  | | <a name=\"191\">191</a>|Duplicate Sub Holding Keys Provided|  | | <a name=\"192\">192</a>|Cut Definition Not Found|  | | <a name=\"193\">193</a>|Cut Definition Invalid|  | | <a name=\"194\">194</a>|Time Variant Property Deletion Date Unspecified|  | | <a name=\"195\">195</a>|Perpetual Property Deletion Date Specified|  | | <a name=\"196\">196</a>|Time Variant Property Upsert Date Unspecified|  | | <a name=\"197\">197</a>|Perpetual Property Upsert Date Specified|  | | <a name=\"200\">200</a>|Invalid Unit For Data Type|  | | <a name=\"201\">201</a>|Invalid Type For Data Type|  | | <a name=\"202\">202</a>|Invalid Value For Data Type|  | | <a name=\"203\">203</a>|Unit Not Defined For Data Type|  | | <a name=\"204\">204</a>|Units Not Supported On Data Type|  | | <a name=\"205\">205</a>|Cannot Specify Units On Data Type|  | | <a name=\"206\">206</a>|Unit Schema Inconsistent With Data Type|  | | <a name=\"207\">207</a>|Unit Definition Not Specified|  | | <a name=\"208\">208</a>|Duplicate Unit Definitions Specified|  | | <a name=\"209\">209</a>|Invalid Units Definition|  | | <a name=\"210\">210</a>|Invalid Instrument Identifier Unit|  | | <a name=\"211\">211</a>|Holdings Adjustment Does Not Exist|  | | <a name=\"212\">212</a>|Could Not Build Excel Url|  | | <a name=\"213\">213</a>|Could Not Get Excel Version|  | | <a name=\"214\">214</a>|Instrument By Code Not Found|  | | <a name=\"215\">215</a>|Entity Schema Does Not Exist|  | | <a name=\"216\">216</a>|Feature Not Supported On Portfolio Type|  | | <a name=\"217\">217</a>|Quote Not Found|  | | <a name=\"218\">218</a>|Invalid Quote Identifier|  | | <a name=\"219\">219</a>|Invalid Metric For Data Type|  | | <a name=\"220\">220</a>|Invalid Instrument Definition|  | | <a name=\"221\">221</a>|Instrument Upsert Failure|  | | <a name=\"222\">222</a>|Reference Portfolio Request Not Supported|  | | <a name=\"223\">223</a>|Transaction Portfolio Request Not Supported|  | | <a name=\"224\">224</a>|Invalid Property Value Assignment|  | | <a name=\"230\">230</a>|Transaction Type Not Found|  | | <a name=\"231\">231</a>|Transaction Type Duplication|  | | <a name=\"232\">232</a>|Portfolio Does Not Exist At Given Date|  | | <a name=\"233\">233</a>|Query Parser Failure|  | | <a name=\"234\">234</a>|Duplicate Constituent|  | | <a name=\"235\">235</a>|Unresolved Instrument Constituent|  | | <a name=\"236\">236</a>|Unresolved Instrument In Transition|  | | <a name=\"237\">237</a>|Missing Side Definitions|  | | <a name=\"240\">240</a>|Duplicate Calculations Failure|  | | <a name=\"299\">299</a>|Invalid Recipe|  | | <a name=\"300\">300</a>|Missing Recipe|  | | <a name=\"301\">301</a>|Dependencies|  | | <a name=\"304\">304</a>|Portfolio Preprocess Failure|  | | <a name=\"310\">310</a>|Valuation Engine Failure|  | | <a name=\"311\">311</a>|Task Factory Failure|  | | <a name=\"312\">312</a>|Task Evaluation Failure|  | | <a name=\"313\">313</a>|Task Generation Failure|  | | <a name=\"314\">314</a>|Engine Configuration Failure|  | | <a name=\"315\">315</a>|Model Specification Failure|  | | <a name=\"320\">320</a>|Market Data Key Failure|  | | <a name=\"321\">321</a>|Market Resolver Failure|  | | <a name=\"322\">322</a>|Market Data Failure|  | | <a name=\"330\">330</a>|Curve Failure|  | | <a name=\"331\">331</a>|Volatility Surface Failure|  | | <a name=\"332\">332</a>|Volatility Cube Failure|  | | <a name=\"350\">350</a>|Instrument Failure|  | | <a name=\"351\">351</a>|Cash Flows Failure|  | | <a name=\"352\">352</a>|Reference Data Failure|  | | <a name=\"360\">360</a>|Aggregation Failure|  | | <a name=\"361\">361</a>|Aggregation Measure Failure|  | | <a name=\"370\">370</a>|Result Retrieval Failure|  | | <a name=\"371\">371</a>|Result Processing Failure|  | | <a name=\"372\">372</a>|Vendor Result Processing Failure|  | | <a name=\"373\">373</a>|Vendor Result Mapping Failure|  | | <a name=\"374\">374</a>|Vendor Library Unauthorised|  | | <a name=\"375\">375</a>|Vendor Connectivity Error|  | | <a name=\"376\">376</a>|Vendor Interface Error|  | | <a name=\"377\">377</a>|Vendor Pricing Failure|  | | <a name=\"378\">378</a>|Vendor Translation Failure|  | | <a name=\"379\">379</a>|Vendor Key Mapping Failure|  | | <a name=\"380\">380</a>|Vendor Reflection Failure|  | | <a name=\"381\">381</a>|Vendor Process Failure|  | | <a name=\"382\">382</a>|Vendor System Failure|  | | <a name=\"390\">390</a>|Attempt To Upsert Duplicate Quotes|  | | <a name=\"391\">391</a>|Corporate Action Source Does Not Exist|  | | <a name=\"392\">392</a>|Corporate Action Source Already Exists|  | | <a name=\"393\">393</a>|Instrument Identifier Already In Use|  | | <a name=\"394\">394</a>|Properties Not Found|  | | <a name=\"395\">395</a>|Batch Operation Aborted|  | | <a name=\"400\">400</a>|Invalid Iso4217 Currency Code|  | | <a name=\"401\">401</a>|Cannot Assign Instrument Identifier To Currency|  | | <a name=\"402\">402</a>|Cannot Assign Currency Identifier To Non Currency|  | | <a name=\"403\">403</a>|Currency Instrument Cannot Be Deleted|  | | <a name=\"404\">404</a>|Currency Instrument Cannot Have Economic Definition|  | | <a name=\"405\">405</a>|Currency Instrument Cannot Have Lookthrough Portfolio|  | | <a name=\"406\">406</a>|Cannot Create Currency Instrument With Multiple Identifiers|  | | <a name=\"407\">407</a>|Specified Currency Is Undefined|  | | <a name=\"410\">410</a>|Index Does Not Exist|  | | <a name=\"411\">411</a>|Sort Field Does Not Exist|  | | <a name=\"413\">413</a>|Negative Pagination Parameters|  | | <a name=\"414\">414</a>|Invalid Search Syntax|  | | <a name=\"415\">415</a>|Filter Execution Timeout|  | | <a name=\"420\">420</a>|Side Definition Inconsistent|  | | <a name=\"450\">450</a>|Invalid Quote Access Metadata Rule|  | | <a name=\"451\">451</a>|Access Metadata Not Found|  | | <a name=\"452\">452</a>|Invalid Access Metadata Identifier|  | | <a name=\"460\">460</a>|Standard Resource Not Found|  | | <a name=\"461\">461</a>|Standard Resource Conflict|  | | <a name=\"462\">462</a>|Calendar Not Found|  | | <a name=\"463\">463</a>|Date In A Calendar Not Found|  | | <a name=\"464\">464</a>|Invalid Date Source Data|  | | <a name=\"465\">465</a>|Invalid Timezone|  | | <a name=\"601\">601</a>|Person Identifier Already In Use|  | | <a name=\"602\">602</a>|Person Not Found|  | | <a name=\"603\">603</a>|Cannot Set Identifier|  | | <a name=\"617\">617</a>|Invalid Recipe Specification In Request|  | | <a name=\"618\">618</a>|Inline Recipe Deserialisation Failure|  | | <a name=\"619\">619</a>|Identifier Types Not Set For Entity|  | | <a name=\"620\">620</a>|Cannot Delete All Client Defined Identifiers|  | | <a name=\"650\">650</a>|The Order requested was not found.|  | | <a name=\"654\">654</a>|The Allocation requested was not found.|  | | <a name=\"655\">655</a>|Cannot build the fx forward target with the given holdings.|  | | <a name=\"656\">656</a>|Group does not contain expected entities.|  | | <a name=\"665\">665</a>|Destination directory not found|  | | <a name=\"667\">667</a>|Relation definition already exists|  | | <a name=\"672\">672</a>|Could not retrieve file contents|  | | <a name=\"673\">673</a>|Missing entitlements for entities in Group|  | | <a name=\"674\">674</a>|Next Best Action not found|  | | <a name=\"676\">676</a>|Relation definition not defined|  | | <a name=\"677\">677</a>|Invalid entity identifier for relation|  | | <a name=\"681\">681</a>|Sorting by specified field not supported|One or more of the provided fields to order by were either invalid or not supported. | | <a name=\"682\">682</a>|Too many fields to sort by|The number of fields to sort the data by exceeds the number allowed by the endpoint | | <a name=\"684\">684</a>|Sequence Not Found|  | | <a name=\"685\">685</a>|Sequence Already Exists|  | | <a name=\"686\">686</a>|Non-cycling sequence has been exhausted|  | | <a name=\"687\">687</a>|Legal Entity Identifier Already In Use|  | | <a name=\"688\">688</a>|Legal Entity Not Found|  | | <a name=\"689\">689</a>|The supplied pagination token is invalid|  | | <a name=\"690\">690</a>|Property Type Is Not Supported|  | | <a name=\"691\">691</a>|Multiple Tax-lots For Currency Type Is Not Supported|  | | <a name=\"692\">692</a>|This endpoint does not support impersonation|  | | <a name=\"693\">693</a>|Entity type is not supported for Relationship|  | | <a name=\"694\">694</a>|Relationship Validation Failure|  | | <a name=\"695\">695</a>|Relationship Not Found|  | | <a name=\"697\">697</a>|Derived Property Formula No Longer Valid|  | | <a name=\"698\">698</a>|Story is not available|  | | <a name=\"703\">703</a>|Corporate Action Does Not Exist|  | | <a name=\"720\">720</a>|The provided sort and filter combination is not valid|  | | <a name=\"721\">721</a>|A2B generation failed|  | | <a name=\"722\">722</a>|Aggregated Return Calculation Failure|  | | <a name=\"723\">723</a>|Custom Entity Definition Identifier Already In Use|  | | <a name=\"724\">724</a>|Custom Entity Definition Not Found|  | | <a name=\"725\">725</a>|The Placement requested was not found.|  | | <a name=\"726\">726</a>|The Execution requested was not found.|  | | <a name=\"727\">727</a>|The Block requested was not found.|  | | <a name=\"728\">728</a>|The Participation requested was not found.|  | | <a name=\"729\">729</a>|The Package requested was not found.|  | | <a name=\"730\">730</a>|The OrderInstruction requested was not found.|  | | <a name=\"732\">732</a>|Custom Entity not found.|  | | <a name=\"733\">733</a>|Custom Entity Identifier already in use.|  | | <a name=\"735\">735</a>|Calculation Failed.|  | | <a name=\"736\">736</a>|An expected key on HttpResponse is missing.|  | | <a name=\"737\">737</a>|A required fee detail is missing.|  | | <a name=\"738\">738</a>|Zero rows were returned from Luminesce|  | | <a name=\"739\">739</a>|Provided Weekend Mask was invalid|  | | <a name=\"742\">742</a>|Custom Entity fields do not match the definition|  | | <a name=\"746\">746</a>|The provided sequence is not valid.|  | | <a name=\"751\">751</a>|The type of the Custom Entity is different than the type provided in the definition.|  | | <a name=\"752\">752</a>|Luminesce process returned an error.|  | | <a name=\"753\">753</a>|File name or content incompatible with operation.|  | | <a name=\"755\">755</a>|Schema of response from Drive is not as expected.|  | | <a name=\"757\">757</a>|Schema of response from Luminesce is not as expected.|  | | <a name=\"758\">758</a>|Luminesce timed out.|  | | <a name=\"763\">763</a>|Invalid Lusid Entity Identifier Unit|  | | <a name=\"768\">768</a>|Fee rule not found.|  | | <a name=\"769\">769</a>|Cannot update the base currency of a portfolio with transactions loaded|  | | <a name=\"771\">771</a>|Transaction configuration source not found|  | | <a name=\"774\">774</a>|Compliance rule not found.|  | | <a name=\"775\">775</a>|Fund accounting document cannot be processed.|  | | <a name=\"778\">778</a>|Unable to look up FX rate from trade ccy to portfolio ccy for some of the trades.|  | | <a name=\"782\">782</a>|The Property definition dataType is not matching the derivation formula dataType|  | | <a name=\"783\">783</a>|The Property definition domain is not supported for derived properties|  | | <a name=\"788\">788</a>|Compliance run not found failure.|  | | <a name=\"790\">790</a>|Custom Entity has missing or invalid identifiers|  | | <a name=\"791\">791</a>|Custom Entity definition already exists|  | | <a name=\"792\">792</a>|Compliance PropertyKey is missing.|  | | <a name=\"793\">793</a>|Compliance Criteria Value for matching is missing.|  | | <a name=\"795\">795</a>|Cannot delete identifier definition|  | | <a name=\"796\">796</a>|Tax rule set not found.|  | | <a name=\"797\">797</a>|A tax rule set with this id already exists.|  | | <a name=\"798\">798</a>|Multiple rule sets for the same property key are applicable.|  | | <a name=\"799\">799</a>|The request must contain a date or diary entry.|  | | <a name=\"800\">800</a>|Can not upsert an instrument event of this type.|  | | <a name=\"801\">801</a>|The instrument event does not exist.|  | | <a name=\"802\">802</a>|The Instrument event is missing salient information.|  | | <a name=\"803\">803</a>|The Instrument event could not be processed.|  | | <a name=\"804\">804</a>|Some data requested does not follow the order graph assumptions.|  | | <a name=\"805\">805</a>|The instrument event type does not exist.|  | | <a name=\"806\">806</a>|The transaction template specification does not exist.|  | | <a name=\"807\">807</a>|The default transaction template does not exist.|  | | <a name=\"808\">808</a>|The transaction template does not exist.|  | | <a name=\"811\">811</a>|A price could not be found for an order.|  | | <a name=\"812\">812</a>|A price could not be found for an allocation.|  | | <a name=\"813\">813</a>|Chart of Accounts not found.|  | | <a name=\"814\">814</a>|Account not found.|  | | <a name=\"815\">815</a>|Abor not found.|  | | <a name=\"816\">816</a>|Abor Configuration not found.|  | | <a name=\"817\">817</a>|Reconciliation mapping not found|  | | <a name=\"818\">818</a>|Attribute type could not be deleted because it doesn\'t exist.|  | | <a name=\"819\">819</a>|Reconciliation not found.|  | | <a name=\"820\">820</a>|Custodian Account not found.|  | | <a name=\"821\">821</a>|Allocation Failure|  | | <a name=\"822\">822</a>|Reconciliation run not found|  | | <a name=\"823\">823</a>|Reconciliation break not found|  | | <a name=\"824\">824</a>|Entity link type could not be deleted because it doesn\'t exist.|  | | <a name=\"828\">828</a>|Address key definition not found.|  | | <a name=\"829\">829</a>|Compliance template not found.|  | | <a name=\"830\">830</a>|Action not supported|  | | <a name=\"831\">831</a>|Reference list not found.|  | | <a name=\"832\">832</a>|Posting Module not found.|  | | <a name=\"833\">833</a>|The type of parameter provided did not match that required by the compliance rule.|  | | <a name=\"834\">834</a>|The parameters provided by a rule did not match those required by its template.|  | | <a name=\"835\">835</a>|The entity has a property in a domain that is not supprted for that entity type.|  | | <a name=\"836\">836</a>|Structured result data not found.|  | | <a name=\"837\">837</a>|Diary entry not found.|  | | <a name=\"838\">838</a>|Diary entry could not be created.|  | | <a name=\"839\">839</a>|Diary entry already exists.|  | | <a name=\"861\">861</a>|Compliance run summary not found.|  | | <a name=\"869\">869</a>|Conflicting instrument properties in batch.|  | | <a name=\"870\">870</a>|Compliance run summary already exists.|  | | <a name=\"871\">871</a>|The specified impersonated user does not exist|  | | <a name=\"874\">874</a>|Provided Property Domain is not supported for entity filter.|  | | <a name=\"875\">875</a>|Cannot Delete System Reference List.|  | | <a name=\"876\">876</a>|Cleardown Module not found.|  | | <a name=\"879\">879</a>|Portfolios do not have the same base currency|  | | <a name=\"880\">880</a>|There was a problem with the definition of the compliance expression.|  | | <a name=\"881\">881</a>|Block overplaced.|  | | <a name=\"882\">882</a>|Order not approved.|  | | <a name=\"883\">883</a>|Cannot update the shared fields of a block with associated orders.|  | | <a name=\"886\">886</a>|Cannot lock the period.|  | | <a name=\"887\">887</a>|Cannot apply clear down module.|  | | <a name=\"888\">888</a>|Cannot upsert Instrument Event Instruction.|  | | <a name=\"889\">889</a>|Cannot read Instrument Event Instruction.|  | | <a name=\"910\">910</a>|Cannot update a block referenced by a placement.|  | | <a name=\"911\">911</a>|A Fund that references this Abor already exists.|  | | <a name=\"912\">912</a>|Cannot add decision to Staged Modification.|  | | <a name=\"913\">913</a>|The Staged Modification could not be applied.|  | | <a name=\"914\">914</a>|Action cannot be executed.|  | 
 *
 * The version of the OpenAPI document: 2.0.495
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { AccessMetadataOperation } from '../model/accessMetadataOperation';
import { AccessMetadataValue } from '../model/accessMetadataValue';
import { CreatePortfolioGroupRequest } from '../model/createPortfolioGroupRequest';
import { DeletedEntityResponse } from '../model/deletedEntityResponse';
import { ExpandedGroup } from '../model/expandedGroup';
import { LusidProblemDetails } from '../model/lusidProblemDetails';
import { LusidValidationProblemDetails } from '../model/lusidValidationProblemDetails';
import { PagedResourceListOfPortfolioGroup } from '../model/pagedResourceListOfPortfolioGroup';
import { PortfolioGroup } from '../model/portfolioGroup';
import { PortfolioGroupProperties } from '../model/portfolioGroupProperties';
import { Property } from '../model/property';
import { ResourceId } from '../model/resourceId';
import { ResourceListOfAccessMetadataValueOf } from '../model/resourceListOfAccessMetadataValueOf';
import { ResourceListOfProcessedCommand } from '../model/resourceListOfProcessedCommand';
import { ResourceListOfPropertyInterval } from '../model/resourceListOfPropertyInterval';
import { ResourceListOfRelationship } from '../model/resourceListOfRelationship';
import { TransactionQueryParameters } from '../model/transactionQueryParameters';
import { UpdatePortfolioGroupRequest } from '../model/updatePortfolioGroupRequest';
import { UpsertPortfolioGroupAccessMetadataRequest } from '../model/upsertPortfolioGroupAccessMetadataRequest';
import { VersionedResourceListOfA2BDataRecord } from '../model/versionedResourceListOfA2BDataRecord';
import { VersionedResourceListOfOutputTransaction } from '../model/versionedResourceListOfOutputTransaction';
import { VersionedResourceListOfPortfolioHolding } from '../model/versionedResourceListOfPortfolioHolding';
import { VersionedResourceListOfTransaction } from '../model/versionedResourceListOfTransaction';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

let defaultBasePath = 'https://fbn-prd.lusid.com/api';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum PortfolioGroupsApiApiKeys {
}

export class PortfolioGroupsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: PortfolioGroupsApiApiKeys, value: string) {
        (this.authentications as any)[PortfolioGroupsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Add a single portfolio to a portfolio group.
     * @summary [EARLY ACCESS] AddPortfolioToGroup: Add portfolio to group
     * @param scope The scope of the portfolio group to add a portfolio to.
     * @param code The code of the portfolio group to add a portfolio to. Together with the scope this uniquely identifies the portfolio group.
     * @param effectiveAt The effective datetime or cut label from which the portfolio will be added to the group.
     * @param resourceId The resource identifier of the portfolio to add to the portfolio group.
     */
    public async addPortfolioToGroup (scope: string, code: string, effectiveAt?: string, resourceId?: ResourceId, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/portfolios'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling addPortfolioToGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling addPortfolioToGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(resourceId, "ResourceId")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Add a portfolio group to a portfolio group as a sub group.
     * @summary [EARLY ACCESS] AddSubGroupToGroup: Add sub group to group
     * @param scope The scope of the portfolio group to add a portfolio group to.
     * @param code The code of the portfolio group to add a portfolio group to. Together with the scope this uniquely identifies the portfolio group.
     * @param effectiveAt The effective datetime or cut label from which the sub group will be added to the group.
     * @param resourceId The resource identifier of the portfolio group to add to the portfolio group as a sub group.
     */
    public async addSubGroupToGroup (scope: string, code: string, effectiveAt?: string, resourceId?: ResourceId, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/subgroups'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling addSubGroupToGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling addSubGroupToGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(resourceId, "ResourceId")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Build transactions for transaction portfolios in a portfolio group over a given interval of effective time.                When the specified portfolio in a portfolio group is a derived transaction portfolio, the returned set of transactions is the  union set of all transactions of the parent (and any grandparents etc.) and the specified derived transaction portfolio itself.
     * @summary BuildTransactionsForPortfolioGroup: Build transactions for transaction portfolios in a portfolio group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies               the portfolio group.
     * @param transactionQueryParameters The query queryParameters which control how the output transactions are built.
     * @param asAt The asAt datetime at which to build the transactions. Defaults to return the latest               version of each transaction if not specified.
     * @param filter Expression to filter the result set.               For example, to filter on the Transaction Type, use \&quot;type eq \&#39;Buy\&#39;\&quot;               Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; or \&quot;Transaction\&quot; domain to decorate onto               the transactions. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or               \&quot;Transaction/strategy/quantsignal\&quot;.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing transactions from a previous call to BuildTransactions.
     */
    public async buildTransactionsForPortfolioGroup (scope: string, code: string, transactionQueryParameters: TransactionQueryParameters, asAt?: Date, filter?: string, propertyKeys?: Array<string>, limit?: number, page?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfOutputTransaction;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/transactions/$build'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling buildTransactionsForPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling buildTransactionsForPortfolioGroup.');
        }

        // verify required parameter 'transactionQueryParameters' is not null or undefined
        if (transactionQueryParameters === null || transactionQueryParameters === undefined) {
            throw new Error('Required parameter transactionQueryParameters was null or undefined when calling buildTransactionsForPortfolioGroup.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(transactionQueryParameters, "TransactionQueryParameters")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfOutputTransaction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfOutputTransaction");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create a portfolio group in a specific scope.
     * @summary CreatePortfolioGroup: Create portfolio group
     * @param scope The scope that the portfolio group will be created in.
     * @param createPortfolioGroupRequest The definition and details of the portfolio group.
     */
    public async createPortfolioGroup (scope: string, createPortfolioGroupRequest?: CreatePortfolioGroupRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling createPortfolioGroup.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createPortfolioGroupRequest, "CreatePortfolioGroupRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Delete one or more properties from a single portfolio group. If the properties are time variant then an effective date time from which the properties  will be deleted must be specified. If the properties are perpetual then it is invalid to specify an effective date time for deletion.
     * @summary [EARLY ACCESS] DeleteGroupProperties: Delete group properties
     * @param scope The scope of the group to delete properties from.
     * @param code The code of the group to delete properties from. Together with the scope this uniquely identifies the group.
     * @param requestBody The property keys of the properties to delete. These take the format              {domain}/{scope}/{code} e.g. \&quot;PortfolioGroup/Manager/Id\&quot;. Each property must be from the \&quot;PortfolioGroup\&quot; domain.
     * @param effectiveAt The effective datetime or cut label at which to delete time-variant properties from.              The property must exist at the specified \&#39;effectiveAt\&#39; datetime. If the \&#39;effectiveAt\&#39; is not provided or is              before the time-variant property exists then a failure is returned. Do not specify this parameter if any of              the properties to delete are perpetual.
     */
    public async deleteGroupProperties (scope: string, code: string, requestBody: Array<string>, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/properties/$delete'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deleteGroupProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteGroupProperties.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling deleteGroupProperties.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestBody, "Array<string>")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeletedEntityResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Deletes the Portfolio Group Access Metadata entry that exactly matches the provided identifier parts.    It is important to always check to verify success (or failure).
     * @summary [EARLY ACCESS] DeleteKeyFromPortfolioGroupAccessMetadata: Delete a Portfolio Group Access Metadata entry
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param metadataKey Key of the Access Metadata entry to delete
     * @param effectiveAt The effective date to delete at, if this is not supplied, it will delete all data found
     * @param effectiveUntil The effective date until which the delete is valid. If not supplied this will be valid indefinitely, or until the next \&#39;effectiveAt\&#39; date of the Access Metadata
     */
    public async deleteKeyFromPortfolioGroupAccessMetadata (scope: string, code: string, metadataKey: string, effectiveAt?: string, effectiveUntil?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata/{metadataKey}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'metadataKey' + '}', encodeURIComponent(String(metadataKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deleteKeyFromPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteKeyFromPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling deleteKeyFromPortfolioGroupAccessMetadata.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (effectiveUntil !== undefined) {
            localVarQueryParameters['effectiveUntil'] = ObjectSerializer.serialize(effectiveUntil, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeletedEntityResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Remove a single portfolio from a portfolio group.
     * @summary [EARLY ACCESS] DeletePortfolioFromGroup: Delete portfolio from group
     * @param scope The scope of the portfolio group to remove the portfolio from.
     * @param code The code of the portfolio group to remove the portfolio from. Together with the scope this uniquely identifies the portfolio group.
     * @param portfolioScope The scope of the portfolio being removed from the portfolio group.
     * @param portfolioCode The code of the portfolio being removed from the portfolio group. Together with the scope this uniquely identifies the portfolio to remove.
     * @param effectiveAt The effective datetime or cut label from which the portfolio will be removed from the portfolio group.
     */
    public async deletePortfolioFromGroup (scope: string, code: string, portfolioScope: string, portfolioCode: string, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/portfolios/{portfolioScope}/{portfolioCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'portfolioScope' + '}', encodeURIComponent(String(portfolioScope)))
            .replace('{' + 'portfolioCode' + '}', encodeURIComponent(String(portfolioCode)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deletePortfolioFromGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deletePortfolioFromGroup.');
        }

        // verify required parameter 'portfolioScope' is not null or undefined
        if (portfolioScope === null || portfolioScope === undefined) {
            throw new Error('Required parameter portfolioScope was null or undefined when calling deletePortfolioFromGroup.');
        }

        // verify required parameter 'portfolioCode' is not null or undefined
        if (portfolioCode === null || portfolioCode === undefined) {
            throw new Error('Required parameter portfolioCode was null or undefined when calling deletePortfolioFromGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Delete a single portfolio group. A portfolio group can be deleted while it still contains portfolios or sub groups.  In this case any portfolios or sub groups contained in this group will not be deleted, however they will no longer be grouped together by this portfolio group.  The deletion will be valid from the portfolio group\'s creation datetime, ie. the portfolio group will no longer exist at any effective datetime from the asAt datetime of deletion.
     * @summary [EARLY ACCESS] DeletePortfolioGroup: Delete portfolio group
     * @param scope The scope of the portfolio group to delete.
     * @param code The code of the portfolio group to delete. Together with the scope this uniquely identifies the portfolio group to delete.
     */
    public async deletePortfolioGroup (scope: string, code: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deletePortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deletePortfolioGroup.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeletedEntityResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Remove a single portfolio group (sub group) from a portfolio group.
     * @summary [EARLY ACCESS] DeleteSubGroupFromGroup: Delete sub group from group
     * @param scope The scope of the portfolio group to remove the sub group from.
     * @param code The code of the portfolio group to remove the sub group from. Together with the scope this uniquely identifies the portfolio group.
     * @param subgroupScope The scope of the sub group to remove from the portfolio group.
     * @param subgroupCode The code of the sub group to remove from the portfolio group. Together with the scope this uniquely identifies the sub group.
     * @param effectiveAt The effective datetime or cut label from which the sub group will be removed from the portfolio group.
     */
    public async deleteSubGroupFromGroup (scope: string, code: string, subgroupScope: string, subgroupCode: string, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/subgroups/{subgroupScope}/{subgroupCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'subgroupScope' + '}', encodeURIComponent(String(subgroupScope)))
            .replace('{' + 'subgroupCode' + '}', encodeURIComponent(String(subgroupCode)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deleteSubGroupFromGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteSubGroupFromGroup.');
        }

        // verify required parameter 'subgroupScope' is not null or undefined
        if (subgroupScope === null || subgroupScope === undefined) {
            throw new Error('Required parameter subgroupScope was null or undefined when calling deleteSubGroupFromGroup.');
        }

        // verify required parameter 'subgroupCode' is not null or undefined
        if (subgroupCode === null || subgroupCode === undefined) {
            throw new Error('Required parameter subgroupCode was null or undefined when calling deleteSubGroupFromGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get an A2B report for all Transaction Portfolios within the given portfolio group.
     * @summary [EARLY ACCESS] GetA2BDataForPortfolioGroup: Get A2B data for a Portfolio Group
     * @param scope The scope of the group to retrieve the A2B report for.
     * @param code The code of the group to retrieve the A2B report for. Together with the scope this              uniquely identifies the portfolio group.
     * @param fromEffectiveAt The lower bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no lower bound if this is not specified.
     * @param toEffectiveAt The upper bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no upper bound if this is not specified.
     * @param asAt The asAt datetime at which to retrieve the portfolio. Defaults to return the latest version              of each transaction if not specified.
     * @param recipeIdScope The scope of the given recipeId
     * @param recipeIdCode The code of the given recipeId
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; domain to decorate onto              the results. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot;.
     * @param filter Expression to filter the result set.              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     */
    public async getA2BDataForPortfolioGroup (scope: string, code: string, fromEffectiveAt: string, toEffectiveAt: string, asAt?: Date, recipeIdScope?: string, recipeIdCode?: string, propertyKeys?: Array<string>, filter?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfA2BDataRecord;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/a2b'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getA2BDataForPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getA2BDataForPortfolioGroup.');
        }

        // verify required parameter 'fromEffectiveAt' is not null or undefined
        if (fromEffectiveAt === null || fromEffectiveAt === undefined) {
            throw new Error('Required parameter fromEffectiveAt was null or undefined when calling getA2BDataForPortfolioGroup.');
        }

        // verify required parameter 'toEffectiveAt' is not null or undefined
        if (toEffectiveAt === null || toEffectiveAt === undefined) {
            throw new Error('Required parameter toEffectiveAt was null or undefined when calling getA2BDataForPortfolioGroup.');
        }

        if (fromEffectiveAt !== undefined) {
            localVarQueryParameters['fromEffectiveAt'] = ObjectSerializer.serialize(fromEffectiveAt, "string");
        }

        if (toEffectiveAt !== undefined) {
            localVarQueryParameters['toEffectiveAt'] = ObjectSerializer.serialize(toEffectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (recipeIdScope !== undefined) {
            localVarQueryParameters['recipeIdScope'] = ObjectSerializer.serialize(recipeIdScope, "string");
        }

        if (recipeIdCode !== undefined) {
            localVarQueryParameters['recipeIdCode'] = ObjectSerializer.serialize(recipeIdCode, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfA2BDataRecord;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfA2BDataRecord");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List all the properties of a single portfolio group.
     * @summary [EARLY ACCESS] GetGroupProperties: Get group properties
     * @param scope The scope of the group to list the properties for.
     * @param code The code of the group to list the properties for. Together with the scope this uniquely identifies the group.
     * @param effectiveAt The effective date time or cut label at which to list the group\&#39;s properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt date time at which to list the group\&#39;s properties. Defaults to return the latest version of each property if not specified.
     */
    public async getGroupProperties (scope: string, code: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroupProperties;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/properties'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getGroupProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getGroupProperties.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroupProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroupProperties");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get the holdings of transaction portfolios in specified portfolio group.
     * @summary GetHoldingsForPortfolioGroup: Get holdings for transaction portfolios in portfolio group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies              the portfolio group.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the holdings of transaction              portfolios in the portfolio group. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the holdings of transaction portfolios in the portfolio group. Defaults              to return the latest version of the holdings if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot;, \&quot;Holding\&quot; or \&quot;Portfolio\&quot; domain to decorate onto              the holdings. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or \&quot;Holding/system/Cost\&quot;.
     * @param byTaxlots Whether or not to expand the holdings to return the underlying tax-lots. Defaults to              False.
     * @param includeSettlementEventsAfterDays Number of days ahead to bring back settlements from, in relation to the specified effectiveAt
     */
    public async getHoldingsForPortfolioGroup (scope: string, code: string, effectiveAt?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, byTaxlots?: boolean, includeSettlementEventsAfterDays?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfPortfolioHolding;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/holdings'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getHoldingsForPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getHoldingsForPortfolioGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (byTaxlots !== undefined) {
            localVarQueryParameters['byTaxlots'] = ObjectSerializer.serialize(byTaxlots, "boolean");
        }

        if (includeSettlementEventsAfterDays !== undefined) {
            localVarQueryParameters['includeSettlementEventsAfterDays'] = ObjectSerializer.serialize(includeSettlementEventsAfterDays, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfPortfolioHolding;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfPortfolioHolding");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Retrieve the definition of a single portfolio group.
     * @summary GetPortfolioGroup: Get portfolio group
     * @param scope The scope of the portfolio group to retrieve the definition for.
     * @param code The code of the portfolio group to retrieve the definition for. Together with the scope              this uniquely identifies the portfolio group.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the portfolio group definition. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the portfolio group definition. Defaults to return              the latest version of the portfolio group definition if not specified.
     * @param relatedEntityPropertyKeys A list of property keys from any domain that supports relationships              to decorate onto related entities. These must take the format {domain}/{scope}/{code}, for example \&#39;Portfolio/Manager/Id\&#39;.
     * @param relationshipDefinitionIds A list of relationship definitions that are used to decorate related entities              onto the portfolio group in the response. These must take the form {relationshipDefinitionScope}/{relationshipDefinitionCode}.
     */
    public async getPortfolioGroup (scope: string, code: string, effectiveAt?: string, asAt?: Date, relatedEntityPropertyKeys?: Array<string>, relationshipDefinitionIds?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (relatedEntityPropertyKeys !== undefined) {
            localVarQueryParameters['relatedEntityPropertyKeys'] = ObjectSerializer.serialize(relatedEntityPropertyKeys, "Array<string>");
        }

        if (relationshipDefinitionIds !== undefined) {
            localVarQueryParameters['relationshipDefinitionIds'] = ObjectSerializer.serialize(relationshipDefinitionIds, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get a specific Portfolio Group access metadata by specifying the corresponding identifier parts                No matching will be performed through this endpoint. To retrieve a rule, it is necessary to specify, exactly, the identifier of the rule
     * @summary [EARLY ACCESS] GetPortfolioGroupAccessMetadataByKey: Get an entry identified by a metadataKey in the Access Metadata of a Portfolio Group
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param metadataKey Key of the metadata entry to retrieve
     * @param effectiveAt The effectiveAt datetime at which to retrieve the access metadata
     * @param asAt The asAt datetime at which to retrieve the access metadata
     */
    public async getPortfolioGroupAccessMetadataByKey (scope: string, code: string, metadataKey: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<AccessMetadataValue>;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata/{metadataKey}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'metadataKey' + '}', encodeURIComponent(String(metadataKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupAccessMetadataByKey.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupAccessMetadataByKey.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling getPortfolioGroupAccessMetadataByKey.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Array<AccessMetadataValue>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Array<AccessMetadataValue>");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Gets all the commands that modified a single portfolio group.
     * @summary GetPortfolioGroupCommands: Get portfolio group commands
     * @param scope The scope of the portfolio group to retrieve the commands for.
     * @param code The code of the portfolio group to retrieve the commands for. Together with the scope this uniquely identifies the portfolio group.
     * @param fromAsAt The lower bound asAt datetime (inclusive) from which to retrieve commands. There is no lower bound if this is not specified.
     * @param toAsAt The upper bound asAt datetime (inclusive) from which to retrieve commands. There is no upper bound if this is not specified.
     * @param filter Expression to filter the result set.               For example, to filter on the User ID, use \&quot;userId.id eq \&#39;string\&#39;\&quot;              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     */
    public async getPortfolioGroupCommands (scope: string, code: string, fromAsAt?: Date, toAsAt?: Date, filter?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfProcessedCommand;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/commands'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupCommands.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupCommands.');
        }

        if (fromAsAt !== undefined) {
            localVarQueryParameters['fromAsAt'] = ObjectSerializer.serialize(fromAsAt, "Date");
        }

        if (toAsAt !== undefined) {
            localVarQueryParameters['toAsAt'] = ObjectSerializer.serialize(toAsAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfProcessedCommand;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfProcessedCommand");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List all the portfolios in a group, including all portfolios within sub groups in the group. Each portfolio will be decorated with all of its properties unless a property filter is specified.
     * @summary [EARLY ACCESS] GetPortfolioGroupExpansion: Get portfolio group expansion
     * @param scope The scope of the portfolio group to expand.
     * @param code The code of the portfolio group to expand. Together with the scope this uniquely identifies the portfolio              group to expand.
     * @param effectiveAt The effective datetime or cut label at which to expand the portfolio group. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to expand the portfolio group. Defaults to return the latest version of each portfolio in the group if not specified.
     * @param propertyFilter The restricted list of property keys from the \&quot;Portfolio\&quot; domain which will be decorated onto each portfolio. These take the format {domain}/{scope}/{code} e.g. \&quot;Portfolio/Manager/Id\&quot;.
     */
    public async getPortfolioGroupExpansion (scope: string, code: string, effectiveAt?: string, asAt?: Date, propertyFilter?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ExpandedGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/expansion'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupExpansion.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupExpansion.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (propertyFilter !== undefined) {
            localVarQueryParameters['propertyFilter'] = ObjectSerializer.serialize(propertyFilter, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ExpandedGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ExpandedGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Pass the scope and Portfolio Group code parameters to retrieve the associated Access Metadata
     * @summary [EARLY ACCESS] GetPortfolioGroupMetadata: Get Access Metadata rules for Portfolio Group
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param effectiveAt The effectiveAt datetime at which to retrieve the Access Metadata
     * @param asAt The asAt datetime at which to retrieve the Access Metadata
     */
    public async getPortfolioGroupMetadata (scope: string, code: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: { [key: string]: Array<AccessMetadataValue>; };  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupMetadata.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: { [key: string]: Array<AccessMetadataValue>; };  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "{ [key: string]: Array<AccessMetadataValue>; }");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List the complete time series of a portfolio group property.
     * @summary [EARLY ACCESS] GetPortfolioGroupPropertyTimeSeries: Get the time series of a portfolio group property
     * @param scope The scope of the group.
     * @param code The code of the group. Together with the scope this uniquely identifies              the portfolio group.
     * @param propertyKey The property key of the property that will have its history shown. These must be in the format {domain}/{scope}/{code} e.g. \&quot;PortfolioGroup/Manager/Id\&quot;.              Each property must be from the \&quot;PortfolioGroup\&quot; domain.
     * @param portfolioGroupEffectiveAt The effective datetime used to resolve the portfolio group. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolio group\&#39;s property history. Defaults to return the current datetime if not supplied.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param page The pagination token to use to continue listing properties from a previous call to get property time series.              This value is returned from the previous call. If a pagination token is provided the filter, effectiveAt, and asAt fields              must not have changed since the original request.
     * @param limit When paginating, limit the number of returned results to this many.
     */
    public async getPortfolioGroupPropertyTimeSeries (scope: string, code: string, propertyKey: string, portfolioGroupEffectiveAt?: string, asAt?: Date, filter?: string, page?: string, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPropertyInterval;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/properties/time-series'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupPropertyTimeSeries.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupPropertyTimeSeries.');
        }

        // verify required parameter 'propertyKey' is not null or undefined
        if (propertyKey === null || propertyKey === undefined) {
            throw new Error('Required parameter propertyKey was null or undefined when calling getPortfolioGroupPropertyTimeSeries.');
        }

        if (propertyKey !== undefined) {
            localVarQueryParameters['propertyKey'] = ObjectSerializer.serialize(propertyKey, "string");
        }

        if (portfolioGroupEffectiveAt !== undefined) {
            localVarQueryParameters['portfolioGroupEffectiveAt'] = ObjectSerializer.serialize(portfolioGroupEffectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfPropertyInterval;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfPropertyInterval");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get relationships for the specified Portfolio Group
     * @summary [EARLY ACCESS] GetPortfolioGroupRelationships: Get Relationships for Portfolio Group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies              the portfolio group.
     * @param effectiveAt The effective datetime or cut label at which to retrieve relationship. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve relationships. Defaults to return the latest LUSID AsAt time if not specified.
     * @param filter Expression to filter relationships. Users should provide null or empty string for this field until further notice.
     * @param identifierTypes Identifier types (as property keys) used for referencing Persons or Legal Entities.              These can be specified from the \&#39;Person\&#39; or \&#39;LegalEntity\&#39; domains and have the format {domain}/{scope}/{code}, for example              \&#39;Person/CompanyDetails/Role\&#39;. An Empty array may be used to return all related Entities.
     */
    public async getPortfolioGroupRelationships (scope: string, code: string, effectiveAt?: string, asAt?: Date, filter?: string, identifierTypes?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfRelationship;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/relationships'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupRelationships.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupRelationships.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (identifierTypes !== undefined) {
            localVarQueryParameters['identifierTypes'] = ObjectSerializer.serialize(identifierTypes, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfRelationship;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfRelationship");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get transactions for transaction portfolios in a portfolio group over a given interval of effective time.                When the specified portfolio in a portfolio group is a derived transaction portfolio, the returned set of transactions is the  union set of all transactions of the parent (and any grandparents etc.) and the specified derived transaction portfolio itself.
     * @summary GetTransactionsForPortfolioGroup: Get transactions for transaction portfolios in a portfolio group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies               the portfolio group.
     * @param fromTransactionDate The lower bound effective datetime or cut label (inclusive) from which to retrieve the transactions.               There is no lower bound if this is not specified.
     * @param toTransactionDate The upper bound effective datetime or cut label (inclusive) from which to retrieve transactions.               There is no upper bound if this is not specified.
     * @param asAt The asAt datetime at which to retrieve the transactions. Defaults to return the latest version               of each transaction if not specified.
     * @param filter Expression to filter the result set.               For example, to filter on the Transaction Type, use \&quot;type eq \&#39;Buy\&#39;\&quot;               Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot;, \&quot;Transaction\&quot;, \&quot;LegalEntity\&quot; or \&quot;CustodianAccount\&quot; domain to decorate onto               the transactions. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or               \&quot;Transaction/strategy/quantsignal\&quot;.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing transactions from a previous call to GetTransactions.
     * @param showCancelledTransactions Option to specify whether or not to include cancelled transactions,               including previous versions of transactions which have since been amended.               Defaults to False if not specified.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;.
     */
    public async getTransactionsForPortfolioGroup (scope: string, code: string, fromTransactionDate?: string, toTransactionDate?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, limit?: number, page?: string, showCancelledTransactions?: boolean, sortBy?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfTransaction;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/transactions'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getTransactionsForPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getTransactionsForPortfolioGroup.');
        }

        if (fromTransactionDate !== undefined) {
            localVarQueryParameters['fromTransactionDate'] = ObjectSerializer.serialize(fromTransactionDate, "string");
        }

        if (toTransactionDate !== undefined) {
            localVarQueryParameters['toTransactionDate'] = ObjectSerializer.serialize(toTransactionDate, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (showCancelledTransactions !== undefined) {
            localVarQueryParameters['showCancelledTransactions'] = ObjectSerializer.serialize(showCancelledTransactions, "boolean");
        }

        if (sortBy !== undefined) {
            localVarQueryParameters['sortBy'] = ObjectSerializer.serialize(sortBy, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfTransaction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfTransaction");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List all the portfolio groups in a single scope.
     * @summary ListPortfolioGroups: List portfolio groups
     * @param scope The scope to list the portfolio groups in.
     * @param effectiveAt The effective datetime or cut label at which to list the portfolio groups. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolio groups. Defaults to return the latest version of each portfolio group if not specified.
     * @param page The pagination token to use to continue listing portfolio groups from a previous call to list portfolio groups. This  value is returned from the previous call. If a pagination token is provided the filter, effectiveAt, sortBy  and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to no limit if not specified.
     * @param filter Expression to filter the result set.              For example, to filter on the Display Name, use \&quot;displayName eq \&#39;string\&#39;\&quot;              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param sortBy A list of field names to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;
     * @param relatedEntityPropertyKeys A list of property keys from any domain that supports relationships              to decorate onto related entities. These must take the format {domain}/{scope}/{code}, for example \&#39;Portfolio/Manager/Id\&#39;.
     * @param relationshipDefinitionIds A list of relationship definitions that are used to decorate related entities              onto the portfolio groups in the response. These must take the form {relationshipDefinitionScope}/{relationshipDefinitionCode}.
     */
    public async listPortfolioGroups (scope: string, effectiveAt?: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, relatedEntityPropertyKeys?: Array<string>, relationshipDefinitionIds?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfPortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling listPortfolioGroups.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (sortBy !== undefined) {
            localVarQueryParameters['sortBy'] = ObjectSerializer.serialize(sortBy, "Array<string>");
        }

        if (relatedEntityPropertyKeys !== undefined) {
            localVarQueryParameters['relatedEntityPropertyKeys'] = ObjectSerializer.serialize(relatedEntityPropertyKeys, "Array<string>");
        }

        if (relationshipDefinitionIds !== undefined) {
            localVarQueryParameters['relationshipDefinitionIds'] = ObjectSerializer.serialize(relationshipDefinitionIds, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfPortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfPortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Patch Portfolio Group Access Metadata Rules in a single scope.  The behaviour is defined by the JSON Patch specification.                Currently only \'add\' is a supported operation on the patch document.    Currently only valid metadata keys are supported paths on the patch document.                The response will return any affected Portfolio Group Access Metadata rules or a failure message if unsuccessful.                It is important to always check to verify success (or failure).                Multiple rules for a metadataKey can exist with different effective at dates, when resources are accessed the rule that is active for the current time will be fetched.
     * @summary [EARLY ACCESS] PatchPortfolioGroupAccessMetadata: Patch Access Metadata rules for a Portfolio Group.
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param accessMetadataOperation The Json patch document
     * @param effectiveAt The date this rule will be effective from
     * @param effectiveUntil The effective date until which the Access Metadata is valid. If not supplied this will be valid indefinitely, or until the next \&#39;effectiveAt\&#39; date of the Access Metadata
     */
    public async patchPortfolioGroupAccessMetadata (scope: string, code: string, accessMetadataOperation: Array<AccessMetadataOperation>, effectiveAt?: string, effectiveUntil?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: { [key: string]: Array<AccessMetadataValue>; };  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling patchPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling patchPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'accessMetadataOperation' is not null or undefined
        if (accessMetadataOperation === null || accessMetadataOperation === undefined) {
            throw new Error('Required parameter accessMetadataOperation was null or undefined when calling patchPortfolioGroupAccessMetadata.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (effectiveUntil !== undefined) {
            localVarQueryParameters['effectiveUntil'] = ObjectSerializer.serialize(effectiveUntil, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(accessMetadataOperation, "Array<AccessMetadataOperation>")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: { [key: string]: Array<AccessMetadataValue>; };  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "{ [key: string]: Array<AccessMetadataValue>; }");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update the definition of a single portfolio group. Not all elements within a portfolio group definition are modifiable  due to the potential implications for data already stored against the portfolio group.
     * @summary [EARLY ACCESS] UpdatePortfolioGroup: Update portfolio group
     * @param scope The scope of the portfolio group to update the definition for.
     * @param code The code of the portfolio group to update the definition for. Together with the scope this uniquely identifies the portfolio group.
     * @param effectiveAt The effective datetime or cut label at which to update the definition.
     * @param updatePortfolioGroupRequest The updated portfolio group definition.
     */
    public async updatePortfolioGroup (scope: string, code: string, effectiveAt?: string, updatePortfolioGroupRequest?: UpdatePortfolioGroupRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling updatePortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling updatePortfolioGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updatePortfolioGroupRequest, "UpdatePortfolioGroupRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update or insert one or more properties onto a single group. A property will be updated if it  already exists and inserted if it does not. All properties must be of the domain \'PortfolioGroup\'.                Upserting a property that exists for a group, with a null value, will delete the instance of the property for that group.                Properties have an <i>effectiveFrom</i> datetime for which the property is valid, and an <i>effectiveUntil</i>  datetime until which the property is valid. Not supplying an <i>effectiveUntil</i> datetime results in the property being  valid indefinitely, or until the next <i>effectiveFrom</i> datetime of the property.
     * @summary [EARLY ACCESS] UpsertGroupProperties: Upsert group properties
     * @param scope The scope of the group to update or insert the properties onto.
     * @param code The code of the group to update or insert the properties onto. Together with the scope this uniquely identifies the group.
     * @param requestBody The properties to be updated or inserted onto the group. Each property in               the request must be keyed by its unique property key. This has the format {domain}/{scope}/{code} e.g. \&quot;PortfolioGroup/Manager/Id\&quot;.
     */
    public async upsertGroupProperties (scope: string, code: string, requestBody?: { [key: string]: Property; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroupProperties;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/properties/$upsert'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling upsertGroupProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertGroupProperties.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: Property; }")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroupProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroupProperties");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update or insert one Portfolio Group Access Metadata Entry in a single scope. An item will be updated if it already exists  and inserted if it does not.                The response will return the successfully updated or inserted Portfolio Group Access Metadata rule or failure message if unsuccessful.                It is important to always check to verify success (or failure).                Multiple rules for a metadataKey can exist with different effective at dates, when resources are accessed the rule that is active for the current time will be fetched.
     * @summary UpsertPortfolioGroupAccessMetadata: Upsert a Portfolio Group Access Metadata entry associated with a specific metadataKey. This creates or updates the data in LUSID.
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param metadataKey Key of the access metadata entry to upsert
     * @param upsertPortfolioGroupAccessMetadataRequest The Portfolio Group Access Metadata rule to upsert
     * @param effectiveAt The date this rule will be effective from
     * @param effectiveUntil The effective date until which the Access Metadata is valid. If not supplied this will be valid indefinitely, or until the next \&#39;effectiveAt\&#39; date of the Access Metadata
     */
    public async upsertPortfolioGroupAccessMetadata (scope: string, code: string, metadataKey: string, upsertPortfolioGroupAccessMetadataRequest: UpsertPortfolioGroupAccessMetadataRequest, effectiveAt?: string, effectiveUntil?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfAccessMetadataValueOf;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata/{metadataKey}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'metadataKey' + '}', encodeURIComponent(String(metadataKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling upsertPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling upsertPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'upsertPortfolioGroupAccessMetadataRequest' is not null or undefined
        if (upsertPortfolioGroupAccessMetadataRequest === null || upsertPortfolioGroupAccessMetadataRequest === undefined) {
            throw new Error('Required parameter upsertPortfolioGroupAccessMetadataRequest was null or undefined when calling upsertPortfolioGroupAccessMetadata.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (effectiveUntil !== undefined) {
            localVarQueryParameters['effectiveUntil'] = ObjectSerializer.serialize(effectiveUntil, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(upsertPortfolioGroupAccessMetadataRequest, "UpsertPortfolioGroupAccessMetadataRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfAccessMetadataValueOf;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfAccessMetadataValueOf");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
