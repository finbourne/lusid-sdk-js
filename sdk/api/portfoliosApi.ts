import { PropertyValue } from '../model/propertyValue';
/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](../../../api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application   | Description                                                                       | API / Swagger Documentation                          | |---------------|-----------------------------------------------------------------------------------|------------------------------------------------------| | LUSID         | Open, API-first, developer-friendly investment data platform.                     | [Swagger](../../../api/swagger/index.html)           | | Web app       | User-facing front end for LUSID.                                                  | [Swagger](../../../app/swagger/index.html)           | | Scheduler     | Automated job scheduler.                                                          | [Swagger](../../../scheduler2/swagger/index.html)    | | Insights      | Monitoring and troubleshooting service.                                           | [Swagger](../../../insights/swagger/index.html)      | | Identity      | Identity management for LUSID (in conjunction with Access)                        | [Swagger](../../../identity/swagger/index.html)      | | Access        | Access control for LUSID (in conjunction with Identity)                           | [Swagger](../../../access/swagger/index.html)        | | Drive         | Secure file repository and manager for collaboration.                             | [Swagger](../../../drive/swagger/index.html)         | | Luminesce     | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](../../../honeycomb/swagger/index.html)     | | Notification  | Notification service.                                                             | [Swagger](../../../notification/swagger/index.html)  | | Configuration | File store for secrets and other sensitive information.                           | [Swagger](../../../configuration/swagger/index.html) | | Workflow      | Workflow service.                                                                 | [Swagger](../../../workflow/swagger/index.html)      |   # Error Codes  | Code|Name|Description | | ---|---|--- | | <a name=\"-10\">-10</a>|Server Configuration Error|  | | <a name=\"-1\">-1</a>|Unknown error|An unexpected error was encountered on our side. | | <a name=\"102\">102</a>|Version Not Found|  | | <a name=\"103\">103</a>|Api Rate Limit Violation|  | | <a name=\"104\">104</a>|Instrument Not Found|  | | <a name=\"105\">105</a>|Property Not Found|  | | <a name=\"106\">106</a>|Portfolio Recursion Depth|  | | <a name=\"108\">108</a>|Group Not Found|  | | <a name=\"109\">109</a>|Portfolio Not Found|  | | <a name=\"110\">110</a>|Property Schema Not Found|  | | <a name=\"111\">111</a>|Portfolio Ancestry Not Found|  | | <a name=\"112\">112</a>|Portfolio With Id Already Exists|  | | <a name=\"113\">113</a>|Orphaned Portfolio|  | | <a name=\"119\">119</a>|Missing Base Claims|  | | <a name=\"121\">121</a>|Property Not Defined|  | | <a name=\"122\">122</a>|Cannot Delete System Property|  | | <a name=\"123\">123</a>|Cannot Modify Immutable Property Field|  | | <a name=\"124\">124</a>|Property Already Exists|  | | <a name=\"125\">125</a>|Invalid Property Life Time|  | | <a name=\"126\">126</a>|Property Constraint Style Excludes Properties|  | | <a name=\"127\">127</a>|Cannot Modify Default Data Type|  | | <a name=\"128\">128</a>|Group Already Exists|  | | <a name=\"129\">129</a>|No Such Data Type|  | | <a name=\"130\">130</a>|Undefined Value For Data Type|  | | <a name=\"131\">131</a>|Unsupported Value Type Defined On Data Type|  | | <a name=\"132\">132</a>|Validation Error|  | | <a name=\"133\">133</a>|Loop Detected In Group Hierarchy|  | | <a name=\"134\">134</a>|Undefined Acceptable Values|  | | <a name=\"135\">135</a>|Sub Group Already Exists|  | | <a name=\"138\">138</a>|Price Source Not Found|  | | <a name=\"139\">139</a>|Analytic Store Not Found|  | | <a name=\"141\">141</a>|Analytic Store Already Exists|  | | <a name=\"143\">143</a>|Client Instrument Already Exists|  | | <a name=\"144\">144</a>|Duplicate In Parameter Set|  | | <a name=\"147\">147</a>|Results Not Found|  | | <a name=\"148\">148</a>|Order Field Not In Result Set|  | | <a name=\"149\">149</a>|Operation Failed|  | | <a name=\"150\">150</a>|Elastic Search Error|  | | <a name=\"151\">151</a>|Invalid Parameter Value|  | | <a name=\"153\">153</a>|Command Processing Failure|  | | <a name=\"154\">154</a>|Entity State Construction Failure|  | | <a name=\"155\">155</a>|Entity Timeline Does Not Exist|  | | <a name=\"156\">156</a>|Concurrency Conflict Failure|  | | <a name=\"157\">157</a>|Invalid Request|  | | <a name=\"158\">158</a>|Event Publish Unknown|  | | <a name=\"159\">159</a>|Event Query Failure|  | | <a name=\"160\">160</a>|Blob Did Not Exist|  | | <a name=\"162\">162</a>|Sub System Request Failure|  | | <a name=\"163\">163</a>|Sub System Configuration Failure|  | | <a name=\"165\">165</a>|Failed To Delete|  | | <a name=\"166\">166</a>|Upsert Client Instrument Failure|  | | <a name=\"167\">167</a>|Illegal As At Interval|  | | <a name=\"168\">168</a>|Illegal Bitemporal Query|  | | <a name=\"169\">169</a>|Invalid Alternate Id|  | | <a name=\"170\">170</a>|Cannot Add Non-Writable Properties To Entity|  | | <a name=\"171\">171</a>|Entity Already Exists In Group|  | | <a name=\"172\">172</a>|Entity With Id Does Not Exist|  | | <a name=\"173\">173</a>|Entity With Id Already Exists|  | | <a name=\"174\">174</a>|Derived Portfolio Details Do Not Exist|  | | <a name=\"175\">175</a>|Entity Not In Group|  | | <a name=\"176\">176</a>|Portfolio With Name Already Exists|  | | <a name=\"177\">177</a>|Invalid Transactions|  | | <a name=\"178\">178</a>|Reference Portfolio Not Found|  | | <a name=\"179\">179</a>|Duplicate Id|  | | <a name=\"180\">180</a>|Command Retrieval Failure|  | | <a name=\"181\">181</a>|Data Filter Application Failure|  | | <a name=\"182\">182</a>|Search Failed|  | | <a name=\"183\">183</a>|Movements Engine Configuration Key Failure|  | | <a name=\"184\">184</a>|Fx Rate Source Not Found|  | | <a name=\"185\">185</a>|Accrual Source Not Found|  | | <a name=\"186\">186</a>|Access Denied|  | | <a name=\"187\">187</a>|Invalid Identity Token|  | | <a name=\"188\">188</a>|Invalid Request Headers|  | | <a name=\"189\">189</a>|Price Not Found|  | | <a name=\"190\">190</a>|Invalid Sub Holding Keys Provided|  | | <a name=\"191\">191</a>|Duplicate Sub Holding Keys Provided|  | | <a name=\"192\">192</a>|Cut Definition Not Found|  | | <a name=\"193\">193</a>|Cut Definition Invalid|  | | <a name=\"194\">194</a>|Time Variant Property Deletion Date Unspecified|  | | <a name=\"195\">195</a>|Perpetual Property Deletion Date Specified|  | | <a name=\"196\">196</a>|Time Variant Property Upsert Date Unspecified|  | | <a name=\"197\">197</a>|Perpetual Property Upsert Date Specified|  | | <a name=\"200\">200</a>|Invalid Unit For Data Type|  | | <a name=\"201\">201</a>|Invalid Type For Data Type|  | | <a name=\"202\">202</a>|Invalid Value For Data Type|  | | <a name=\"203\">203</a>|Unit Not Defined For Data Type|  | | <a name=\"204\">204</a>|Units Not Supported On Data Type|  | | <a name=\"205\">205</a>|Cannot Specify Units On Data Type|  | | <a name=\"206\">206</a>|Unit Schema Inconsistent With Data Type|  | | <a name=\"207\">207</a>|Unit Definition Not Specified|  | | <a name=\"208\">208</a>|Duplicate Unit Definitions Specified|  | | <a name=\"209\">209</a>|Invalid Units Definition|  | | <a name=\"210\">210</a>|Invalid Instrument Identifier Unit|  | | <a name=\"211\">211</a>|Holdings Adjustment Does Not Exist|  | | <a name=\"212\">212</a>|Could Not Build Excel Url|  | | <a name=\"213\">213</a>|Could Not Get Excel Version|  | | <a name=\"214\">214</a>|Instrument By Code Not Found|  | | <a name=\"215\">215</a>|Entity Schema Does Not Exist|  | | <a name=\"216\">216</a>|Feature Not Supported On Portfolio Type|  | | <a name=\"217\">217</a>|Quote Not Found|  | | <a name=\"218\">218</a>|Invalid Quote Identifier|  | | <a name=\"219\">219</a>|Invalid Metric For Data Type|  | | <a name=\"220\">220</a>|Invalid Instrument Definition|  | | <a name=\"221\">221</a>|Instrument Upsert Failure|  | | <a name=\"222\">222</a>|Reference Portfolio Request Not Supported|  | | <a name=\"223\">223</a>|Transaction Portfolio Request Not Supported|  | | <a name=\"224\">224</a>|Invalid Property Value Assignment|  | | <a name=\"230\">230</a>|Transaction Type Not Found|  | | <a name=\"231\">231</a>|Transaction Type Duplication|  | | <a name=\"232\">232</a>|Portfolio Does Not Exist At Given Date|  | | <a name=\"233\">233</a>|Query Parser Failure|  | | <a name=\"234\">234</a>|Duplicate Constituent|  | | <a name=\"235\">235</a>|Unresolved Instrument Constituent|  | | <a name=\"236\">236</a>|Unresolved Instrument In Transition|  | | <a name=\"237\">237</a>|Missing Side Definitions|  | | <a name=\"240\">240</a>|Duplicate Calculations Failure|  | | <a name=\"299\">299</a>|Invalid Recipe|  | | <a name=\"300\">300</a>|Missing Recipe|  | | <a name=\"301\">301</a>|Dependencies|  | | <a name=\"304\">304</a>|Portfolio Preprocess Failure|  | | <a name=\"310\">310</a>|Valuation Engine Failure|  | | <a name=\"311\">311</a>|Task Factory Failure|  | | <a name=\"312\">312</a>|Task Evaluation Failure|  | | <a name=\"313\">313</a>|Task Generation Failure|  | | <a name=\"314\">314</a>|Engine Configuration Failure|  | | <a name=\"315\">315</a>|Model Specification Failure|  | | <a name=\"320\">320</a>|Market Data Key Failure|  | | <a name=\"321\">321</a>|Market Resolver Failure|  | | <a name=\"322\">322</a>|Market Data Failure|  | | <a name=\"330\">330</a>|Curve Failure|  | | <a name=\"331\">331</a>|Volatility Surface Failure|  | | <a name=\"332\">332</a>|Volatility Cube Failure|  | | <a name=\"350\">350</a>|Instrument Failure|  | | <a name=\"351\">351</a>|Cash Flows Failure|  | | <a name=\"352\">352</a>|Reference Data Failure|  | | <a name=\"360\">360</a>|Aggregation Failure|  | | <a name=\"361\">361</a>|Aggregation Measure Failure|  | | <a name=\"370\">370</a>|Result Retrieval Failure|  | | <a name=\"371\">371</a>|Result Processing Failure|  | | <a name=\"372\">372</a>|Vendor Result Processing Failure|  | | <a name=\"373\">373</a>|Vendor Result Mapping Failure|  | | <a name=\"374\">374</a>|Vendor Library Unauthorised|  | | <a name=\"375\">375</a>|Vendor Connectivity Error|  | | <a name=\"376\">376</a>|Vendor Interface Error|  | | <a name=\"377\">377</a>|Vendor Pricing Failure|  | | <a name=\"378\">378</a>|Vendor Translation Failure|  | | <a name=\"379\">379</a>|Vendor Key Mapping Failure|  | | <a name=\"380\">380</a>|Vendor Reflection Failure|  | | <a name=\"381\">381</a>|Vendor Process Failure|  | | <a name=\"382\">382</a>|Vendor System Failure|  | | <a name=\"390\">390</a>|Attempt To Upsert Duplicate Quotes|  | | <a name=\"391\">391</a>|Corporate Action Source Does Not Exist|  | | <a name=\"392\">392</a>|Corporate Action Source Already Exists|  | | <a name=\"393\">393</a>|Instrument Identifier Already In Use|  | | <a name=\"394\">394</a>|Properties Not Found|  | | <a name=\"395\">395</a>|Batch Operation Aborted|  | | <a name=\"400\">400</a>|Invalid Iso4217 Currency Code|  | | <a name=\"401\">401</a>|Cannot Assign Instrument Identifier To Currency|  | | <a name=\"402\">402</a>|Cannot Assign Currency Identifier To Non Currency|  | | <a name=\"403\">403</a>|Currency Instrument Cannot Be Deleted|  | | <a name=\"404\">404</a>|Currency Instrument Cannot Have Economic Definition|  | | <a name=\"405\">405</a>|Currency Instrument Cannot Have Lookthrough Portfolio|  | | <a name=\"406\">406</a>|Cannot Create Currency Instrument With Multiple Identifiers|  | | <a name=\"407\">407</a>|Specified Currency Is Undefined|  | | <a name=\"410\">410</a>|Index Does Not Exist|  | | <a name=\"411\">411</a>|Sort Field Does Not Exist|  | | <a name=\"413\">413</a>|Negative Pagination Parameters|  | | <a name=\"414\">414</a>|Invalid Search Syntax|  | | <a name=\"415\">415</a>|Filter Execution Timeout|  | | <a name=\"420\">420</a>|Side Definition Inconsistent|  | | <a name=\"450\">450</a>|Invalid Quote Access Metadata Rule|  | | <a name=\"451\">451</a>|Access Metadata Not Found|  | | <a name=\"452\">452</a>|Invalid Access Metadata Identifier|  | | <a name=\"460\">460</a>|Standard Resource Not Found|  | | <a name=\"461\">461</a>|Standard Resource Conflict|  | | <a name=\"462\">462</a>|Calendar Not Found|  | | <a name=\"463\">463</a>|Date In A Calendar Not Found|  | | <a name=\"464\">464</a>|Invalid Date Source Data|  | | <a name=\"465\">465</a>|Invalid Timezone|  | | <a name=\"601\">601</a>|Person Identifier Already In Use|  | | <a name=\"602\">602</a>|Person Not Found|  | | <a name=\"603\">603</a>|Cannot Set Identifier|  | | <a name=\"617\">617</a>|Invalid Recipe Specification In Request|  | | <a name=\"618\">618</a>|Inline Recipe Deserialisation Failure|  | | <a name=\"619\">619</a>|Identifier Types Not Set For Entity|  | | <a name=\"620\">620</a>|Cannot Delete All Client Defined Identifiers|  | | <a name=\"650\">650</a>|The Order requested was not found.|  | | <a name=\"654\">654</a>|The Allocation requested was not found.|  | | <a name=\"655\">655</a>|Cannot build the fx forward target with the given holdings.|  | | <a name=\"656\">656</a>|Group does not contain expected entities.|  | | <a name=\"665\">665</a>|Destination directory not found|  | | <a name=\"667\">667</a>|Relation definition already exists|  | | <a name=\"672\">672</a>|Could not retrieve file contents|  | | <a name=\"673\">673</a>|Missing entitlements for entities in Group|  | | <a name=\"674\">674</a>|Next Best Action not found|  | | <a name=\"676\">676</a>|Relation definition not defined|  | | <a name=\"677\">677</a>|Invalid entity identifier for relation|  | | <a name=\"681\">681</a>|Sorting by specified field not supported|One or more of the provided fields to order by were either invalid or not supported. | | <a name=\"682\">682</a>|Too many fields to sort by|The number of fields to sort the data by exceeds the number allowed by the endpoint | | <a name=\"684\">684</a>|Sequence Not Found|  | | <a name=\"685\">685</a>|Sequence Already Exists|  | | <a name=\"686\">686</a>|Non-cycling sequence has been exhausted|  | | <a name=\"687\">687</a>|Legal Entity Identifier Already In Use|  | | <a name=\"688\">688</a>|Legal Entity Not Found|  | | <a name=\"689\">689</a>|The supplied pagination token is invalid|  | | <a name=\"690\">690</a>|Property Type Is Not Supported|  | | <a name=\"691\">691</a>|Multiple Tax-lots For Currency Type Is Not Supported|  | | <a name=\"692\">692</a>|This endpoint does not support impersonation|  | | <a name=\"693\">693</a>|Entity type is not supported for Relationship|  | | <a name=\"694\">694</a>|Relationship Validation Failure|  | | <a name=\"695\">695</a>|Relationship Not Found|  | | <a name=\"697\">697</a>|Derived Property Formula No Longer Valid|  | | <a name=\"698\">698</a>|Story is not available|  | | <a name=\"703\">703</a>|Corporate Action Does Not Exist|  | | <a name=\"720\">720</a>|The provided sort and filter combination is not valid|  | | <a name=\"721\">721</a>|A2B generation failed|  | | <a name=\"722\">722</a>|Aggregated Return Calculation Failure|  | | <a name=\"723\">723</a>|Custom Entity Definition Identifier Already In Use|  | | <a name=\"724\">724</a>|Custom Entity Definition Not Found|  | | <a name=\"725\">725</a>|The Placement requested was not found.|  | | <a name=\"726\">726</a>|The Execution requested was not found.|  | | <a name=\"727\">727</a>|The Block requested was not found.|  | | <a name=\"728\">728</a>|The Participation requested was not found.|  | | <a name=\"729\">729</a>|The Package requested was not found.|  | | <a name=\"730\">730</a>|The OrderInstruction requested was not found.|  | | <a name=\"732\">732</a>|Custom Entity not found.|  | | <a name=\"733\">733</a>|Custom Entity Identifier already in use.|  | | <a name=\"735\">735</a>|Calculation Failed.|  | | <a name=\"736\">736</a>|An expected key on HttpResponse is missing.|  | | <a name=\"737\">737</a>|A required fee detail is missing.|  | | <a name=\"738\">738</a>|Zero rows were returned from Luminesce|  | | <a name=\"739\">739</a>|Provided Weekend Mask was invalid|  | | <a name=\"742\">742</a>|Custom Entity fields do not match the definition|  | | <a name=\"746\">746</a>|The provided sequence is not valid.|  | | <a name=\"751\">751</a>|The type of the Custom Entity is different than the type provided in the definition.|  | | <a name=\"752\">752</a>|Luminesce process returned an error.|  | | <a name=\"753\">753</a>|File name or content incompatible with operation.|  | | <a name=\"755\">755</a>|Schema of response from Drive is not as expected.|  | | <a name=\"757\">757</a>|Schema of response from Luminesce is not as expected.|  | | <a name=\"758\">758</a>|Luminesce timed out.|  | | <a name=\"763\">763</a>|Invalid Lusid Entity Identifier Unit|  | | <a name=\"768\">768</a>|Fee rule not found.|  | | <a name=\"769\">769</a>|Cannot update the base currency of a portfolio with transactions loaded|  | | <a name=\"771\">771</a>|Transaction configuration source not found|  | | <a name=\"774\">774</a>|Compliance rule not found.|  | | <a name=\"775\">775</a>|Fund accounting document cannot be processed.|  | | <a name=\"778\">778</a>|Unable to look up FX rate from trade ccy to portfolio ccy for some of the trades.|  | | <a name=\"782\">782</a>|The Property definition dataType is not matching the derivation formula dataType|  | | <a name=\"783\">783</a>|The Property definition domain is not supported for derived properties|  | | <a name=\"788\">788</a>|Compliance run not found failure.|  | | <a name=\"790\">790</a>|Custom Entity has missing or invalid identifiers|  | | <a name=\"791\">791</a>|Custom Entity definition already exists|  | | <a name=\"792\">792</a>|Compliance PropertyKey is missing.|  | | <a name=\"793\">793</a>|Compliance Criteria Value for matching is missing.|  | | <a name=\"795\">795</a>|Cannot delete identifier definition|  | | <a name=\"796\">796</a>|Tax rule set not found.|  | | <a name=\"797\">797</a>|A tax rule set with this id already exists.|  | | <a name=\"798\">798</a>|Multiple rule sets for the same property key are applicable.|  | | <a name=\"799\">799</a>|The request must contain a date or diary entry.|  | | <a name=\"800\">800</a>|Can not upsert an instrument event of this type.|  | | <a name=\"801\">801</a>|The instrument event does not exist.|  | | <a name=\"802\">802</a>|The Instrument event is missing salient information.|  | | <a name=\"803\">803</a>|The Instrument event could not be processed.|  | | <a name=\"804\">804</a>|Some data requested does not follow the order graph assumptions.|  | | <a name=\"805\">805</a>|The instrument event type does not exist.|  | | <a name=\"806\">806</a>|The transaction template specification does not exist.|  | | <a name=\"807\">807</a>|The default transaction template does not exist.|  | | <a name=\"808\">808</a>|The transaction template does not exist.|  | | <a name=\"811\">811</a>|A price could not be found for an order.|  | | <a name=\"812\">812</a>|A price could not be found for an allocation.|  | | <a name=\"813\">813</a>|Chart of Accounts not found.|  | | <a name=\"814\">814</a>|Account not found.|  | | <a name=\"815\">815</a>|Abor not found.|  | | <a name=\"816\">816</a>|Abor Configuration not found.|  | | <a name=\"817\">817</a>|Reconciliation mapping not found|  | | <a name=\"818\">818</a>|Attribute type could not be deleted because it doesn\'t exist.|  | | <a name=\"819\">819</a>|Reconciliation not found.|  | | <a name=\"820\">820</a>|Custodian Account not found.|  | | <a name=\"821\">821</a>|Allocation Failure|  | | <a name=\"822\">822</a>|Reconciliation run not found|  | | <a name=\"823\">823</a>|Reconciliation break not found|  | | <a name=\"824\">824</a>|Entity link type could not be deleted because it doesn\'t exist.|  | | <a name=\"828\">828</a>|Address key definition not found.|  | | <a name=\"829\">829</a>|Compliance template not found.|  | | <a name=\"830\">830</a>|Action not supported|  | | <a name=\"831\">831</a>|Reference list not found.|  | | <a name=\"832\">832</a>|Posting Module not found.|  | | <a name=\"833\">833</a>|The type of parameter provided did not match that required by the compliance rule.|  | | <a name=\"834\">834</a>|The parameters provided by a rule did not match those required by its template.|  | | <a name=\"835\">835</a>|The entity has a property in a domain that is not supprted for that entity type.|  | | <a name=\"836\">836</a>|Structured result data not found.|  | | <a name=\"837\">837</a>|Diary entry not found.|  | | <a name=\"838\">838</a>|Diary entry could not be created.|  | | <a name=\"839\">839</a>|Diary entry already exists.|  | | <a name=\"861\">861</a>|Compliance run summary not found.|  | | <a name=\"869\">869</a>|Conflicting instrument properties in batch.|  | | <a name=\"870\">870</a>|Compliance run summary already exists.|  | | <a name=\"871\">871</a>|The specified impersonated user does not exist|  | | <a name=\"874\">874</a>|Provided Property Domain is not supported for entity filter.|  | | <a name=\"875\">875</a>|Cannot Delete System Reference List.|  | | <a name=\"876\">876</a>|Cleardown Module not found.|  | | <a name=\"879\">879</a>|Portfolios do not have the same base currency|  | | <a name=\"880\">880</a>|There was a problem with the definition of the compliance expression.|  | | <a name=\"881\">881</a>|Block overplaced.|  | | <a name=\"882\">882</a>|Order not approved.|  | | <a name=\"883\">883</a>|Cannot update the shared fields of a block with associated orders.|  | | <a name=\"886\">886</a>|Cannot lock the period.|  | | <a name=\"887\">887</a>|Cannot apply clear down module.|  | | <a name=\"888\">888</a>|Cannot upsert Instrument Event Instruction.|  | | <a name=\"889\">889</a>|Cannot read Instrument Event Instruction.|  | | <a name=\"895\">895</a>|The Capital Ratio Calculation Is Wrong.|  | | <a name=\"910\">910</a>|Cannot update a block referenced by a placement.|  | | <a name=\"911\">911</a>|A Fund that references this Abor already exists.|  | | <a name=\"912\">912</a>|Cannot add decision to Staged Modification.|  | | <a name=\"913\">913</a>|The Staged Modification could not be applied.|  | | <a name=\"914\">914</a>|Action cannot be executed.|  | | <a name=\"915\">915</a>|Cannot upsert multiple versions of the same property in one request.|  | | <a name=\"916\">916</a>|Placement and direct descendents have more executed quantity than total placement quantity.|  | | <a name=\"917\">917</a>|Cannot update a placement with this EntryType.|  | | <a name=\"918\">918</a>|Cannot update a placement in this State.|  | | <a name=\"919\">919</a>|Placement could not be cancelled.|  | | <a name=\"920\">920</a>|Share Class not configured in Fund|  | | <a name=\"921\">921</a>|Share Class Sub Holding Key not configured in Portfolio|  | | <a name=\"922\">922</a>|Could not update an order.|  | | <a name=\"923\">923</a>|Multiple sets of Share Class Sub Holding Keys configured across the Portfolios of a Fund.|  | | <a name=\"924\">924</a>|One or more matrix cells could not be added to the matrix.|  | | <a name=\"925\">925</a>|There was a problem with the provided matrix definition.|  | | <a name=\"926\">926</a>|Matrix definition does not exist.|  | | <a name=\"927\">927</a>|Matrix definition could not be deleted because it doesn\'t exist.|  | | <a name=\"928\">928</a>|DataType with Id already exists.|  | | <a name=\"929\">929</a>|Square matrix is incomplete.|  | | <a name=\"930\">930</a>|A conditional license term has been exceeded.|  | | <a name=\"931\">931</a>|The Custom Data Model requested is not intended for the entity provided.|  | | <a name=\"932\">932</a>|The entity provided does not have a mandatory property specified by the Custom Data Model.|  | | <a name=\"933\">933</a>|The entity provided has a property not allowed by the specified Custom Data Model.|  | | <a name=\"934\">934</a>|The entity provided does not have a mandatory identifier specified by the Custom Data Model.|  | | <a name=\"935\">935</a>|The entity provided has an identifier not allowed by the specified Custom Data Model.|  | | <a name=\"936\">936</a>|The Custom Data Model included an alias or sort-by attribute that was not on the definition.|  | | <a name=\"937\">937</a>|The ClosedPeriod with the Id already exists on the Timeline|  | | <a name=\"938\">938</a>|The new Closed Period would cause the Timeline to have non-contiguous Closed Periods|  | | <a name=\"939\">939</a>|Blocked by a Network Zone|  | | <a name=\"940\">940</a>|The entity provided does not meet the conditions of the Custom Data Model.|  | | <a name=\"941\">941</a>|Order not compliant.|  | | <a name=\"942\">942</a>|Action would create a circular dependency.|  | | <a name=\"944\">944</a>|Derived Property calculation not complete.|  | | <a name=\"945\">945</a>|Derived Property is not filterable.|  | | <a name=\"946\">946</a>|The conditions provided have one or more errors.|  | | <a name=\"947\">947</a>|The property/identifier domain and entity domain do not match.|  | | <a name=\"948\">948</a>|Invalid Timeline|  | | <a name=\"949\">949</a>|Filterable Derived Property limit reached.|  | | <a name=\"950\">950</a>|Investor Record Identifier Already In Use|  | | <a name=\"951\">951</a>|Investor Record Not Found|  | | <a name=\"952\">952</a>|Investment Account Identifier Already In Use|  | | <a name=\"953\">953</a>|Investment Account Not Found|  | | <a name=\"954\">954</a>|Could Not Sweep Block|  | | <a name=\"955\">955</a>|Entity Unique Id has the wrong format|  | | <a name=\"956\">956</a>|Post Close Activity is invalid|  | | <a name=\"957\">957</a>|The ClosedPeriod with the Id does not exist on the Timeline|  | | <a name=\"958\">958</a>|Invalid Settlement Instructions|  | 
 *
 * The version of the OpenAPI document: 2.0.1225
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
import { AggregatedReturnsDispersionRequest } from '../model/aggregatedReturnsDispersionRequest';
import { AggregatedReturnsRequest } from '../model/aggregatedReturnsRequest';
import { AggregatedReturnsResponse } from '../model/aggregatedReturnsResponse';
import { BatchUpsertPortfolioAccessMetadataRequest } from '../model/batchUpsertPortfolioAccessMetadataRequest';
import { BatchUpsertPortfolioAccessMetadataResponse } from '../model/batchUpsertPortfolioAccessMetadataResponse';
import { CompositeBreakdownRequest } from '../model/compositeBreakdownRequest';
import { CompositeBreakdownResponse } from '../model/compositeBreakdownResponse';
import { CompositeDispersionResponse } from '../model/compositeDispersionResponse';
import { DeletedEntityResponse } from '../model/deletedEntityResponse';
import { InstrumentEventInstruction } from '../model/instrumentEventInstruction';
import { InstrumentEventInstructionRequest } from '../model/instrumentEventInstructionRequest';
import { InstrumentEventInstructionsResponse } from '../model/instrumentEventInstructionsResponse';
import { LusidProblemDetails } from '../model/lusidProblemDetails';
import { LusidValidationProblemDetails } from '../model/lusidValidationProblemDetails';
import { Operation } from '../model/operation';
import { PagedResourceListOfInstrumentEventInstruction } from '../model/pagedResourceListOfInstrumentEventInstruction';
import { PerformanceReturn } from '../model/performanceReturn';
import { Portfolio } from '../model/portfolio';
import { PortfolioProperties } from '../model/portfolioProperties';
import { Property } from '../model/property';
import { ResourceListOfAccessMetadataValueOf } from '../model/resourceListOfAccessMetadataValueOf';
import { ResourceListOfAggregatedReturn } from '../model/resourceListOfAggregatedReturn';
import { ResourceListOfPerformanceReturn } from '../model/resourceListOfPerformanceReturn';
import { ResourceListOfPortfolio } from '../model/resourceListOfPortfolio';
import { ResourceListOfProcessedCommand } from '../model/resourceListOfProcessedCommand';
import { ResourceListOfProperty } from '../model/resourceListOfProperty';
import { ResourceListOfPropertyInterval } from '../model/resourceListOfPropertyInterval';
import { ResourceListOfRelationship } from '../model/resourceListOfRelationship';
import { UpdatePortfolioRequest } from '../model/updatePortfolioRequest';
import { UpsertPortfolioAccessMetadataRequest } from '../model/upsertPortfolioAccessMetadataRequest';
import { UpsertReturnsResponse } from '../model/upsertReturnsResponse';

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

export enum PortfoliosApiApiKeys {
}

export class PortfoliosApi {
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

    public setApiKey(key: PortfoliosApiApiKeys, value: string) {
        (this.authentications as any)[PortfoliosApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Update or insert multiple Access Metadata rules for multiple Portfolios. Items will be updated if they already exist  and inserted if they do not. No other items will be affected    The response will return the successfully updated or inserted Portfolio Access Metadata Rules or a failure message if unsuccessful                Multiple rules for a metadataKey can exist with different effective at dates, when resources are accessed the rule that is active for the current time will be fetched
     * @summary [EARLY ACCESS] BatchUpsertPortfolioAccessMetadata: Upsert multiple Portfolio Access Metadata Rules to multiple Portfolios
     * @param requestBody The Access Metadata Rules to upsert and the Portfolio identifiers to upsert for
     * @param effectiveAt The date these rules will be effective from
     * @param effectiveUntil The effective date until which the Access Metadata is valid. If not supplied, this will be valid indefinitely, or until the next \&#39;effectiveAt\&#39; date of the Access Metadata
     */
    public async batchUpsertPortfolioAccessMetadata (requestBody: { [key: string]: BatchUpsertPortfolioAccessMetadataRequest; }, effectiveAt?: string, effectiveUntil?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchUpsertPortfolioAccessMetadataResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/metadata';
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

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling batchUpsertPortfolioAccessMetadata.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (effectiveUntil !== undefined) {
            localVarQueryParameters['effectiveUntil'] = ObjectSerializer.serialize(effectiveUntil, "string");
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: BatchUpsertPortfolioAccessMetadataRequest; }")
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
            return new Promise<{ response: http.IncomingMessage; body: BatchUpsertPortfolioAccessMetadataResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "BatchUpsertPortfolioAccessMetadataResponse");
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
     * Delete a particular instruction for a particular portfolio
     * @summary [EARLY ACCESS] DeleteInstrumentEventInstruction: Delete Instrument Event Instruction
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param instrumentEventInstructionId The id of the instruction to be deleted.
     * @param portfolioEffectiveAt The effective date at which the portfolio will be resolved. Defaults to current time if not specified.
     */
    public async deleteInstrumentEventInstruction (scope: string, code: string, instrumentEventInstructionId: string, portfolioEffectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/instrumenteventinstructions/{instrumentEventInstructionId}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'instrumentEventInstructionId' + '}', encodeURIComponent(String(instrumentEventInstructionId)));
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
            throw new Error('Required parameter scope was null or undefined when calling deleteInstrumentEventInstruction.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteInstrumentEventInstruction.');
        }

        // verify required parameter 'instrumentEventInstructionId' is not null or undefined
        if (instrumentEventInstructionId === null || instrumentEventInstructionId === undefined) {
            throw new Error('Required parameter instrumentEventInstructionId was null or undefined when calling deleteInstrumentEventInstruction.');
        }

        if (portfolioEffectiveAt !== undefined) {
            localVarQueryParameters['portfolioEffectiveAt'] = ObjectSerializer.serialize(portfolioEffectiveAt, "string");
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
     * Delete the Portfolio Access Metadata Rule that exactly matches the provided identifier parts
     * @summary DeleteKeyFromPortfolioAccessMetadata: Delete a Portfolio Access Metadata Rule
     * @param scope The scope of the Quote Access Metadata Rule to retrieve.
     * @param code Portfolio code
     * @param metadataKey The metadataKey identifying the access metadata entry to delete
     * @param effectiveAt The effective date to delete at, if this is not supplied, it will delete all data found
     * @param effectiveUntil The effective date until which the delete is valid. If not supplied this will be valid indefinitely, or until the next \&#39;effectiveAt\&#39; date of the Access Metadata
     */
    public async deleteKeyFromPortfolioAccessMetadata (scope: string, code: string, metadataKey: string, effectiveAt?: string, effectiveUntil?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/metadata/{metadataKey}'
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
            throw new Error('Required parameter scope was null or undefined when calling deleteKeyFromPortfolioAccessMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteKeyFromPortfolioAccessMetadata.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling deleteKeyFromPortfolioAccessMetadata.');
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
     * Delete a particular portfolio.                The deletion will take effect from the portfolio\'s creation datetime. This means that the portfolio will no longer exist at any effective datetime, as per the asAt datetime of deletion.
     * @summary DeletePortfolio: Delete portfolio
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     */
    public async deletePortfolio (scope: string, code: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}'
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
            throw new Error('Required parameter scope was null or undefined when calling deletePortfolio.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deletePortfolio.');
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
     * Delete one or more properties from a particular portfolio. If the properties are time-variant then an effective datetime from which  to delete properties must be specified. If the properties are perpetual then it is invalid to specify an effective datetime for deletion.
     * @summary DeletePortfolioProperties: Delete portfolio properties
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param propertyKeys The property keys of the properties to delete. These must take the format              {domain}/{scope}/{code}, for example \&#39;Portfolio/Manager/Id\&#39;. Each property must be from the \&#39;Portfolio\&#39; domain.
     * @param effectiveAt The effective datetime or cut label at which to delete time-variant properties from.              The property must exist at the specified \&#39;effectiveAt\&#39; datetime. If the \&#39;effectiveAt\&#39; is not provided or is              before the time-variant property exists then a failure is returned. Do not specify this parameter if any of              the properties to delete are perpetual.
     */
    public async deletePortfolioProperties (scope: string, code: string, propertyKeys: Array<string>, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/properties'
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
            throw new Error('Required parameter scope was null or undefined when calling deletePortfolioProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deletePortfolioProperties.');
        }

        // verify required parameter 'propertyKeys' is not null or undefined
        if (propertyKeys === null || propertyKeys === undefined) {
            throw new Error('Required parameter propertyKeys was null or undefined when calling deletePortfolioProperties.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
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
     * Cancel one or more Returns which exist into the specified portfolio.
     * @summary [EARLY ACCESS] DeletePortfolioReturns: Delete Returns
     * @param scope The scope of the Portfolio.
     * @param code The code of the  Portfolio.
     * @param returnScope The scope of the Returns.
     * @param returnCode The code of the Returns.
     * @param fromEffectiveAt The start date from which to delete the Returns.
     * @param toEffectiveAt The end date from which to delete the Returns.
     * @param period The Period (Daily or Monthly) of the Returns to be deleted. Defaults to Daily.
     */
    public async deletePortfolioReturns (scope: string, code: string, returnScope: string, returnCode: string, fromEffectiveAt: string, toEffectiveAt: string, period?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/returns/{returnScope}/{returnCode}/$delete'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'returnScope' + '}', encodeURIComponent(String(returnScope)))
            .replace('{' + 'returnCode' + '}', encodeURIComponent(String(returnCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling deletePortfolioReturns.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deletePortfolioReturns.');
        }

        // verify required parameter 'returnScope' is not null or undefined
        if (returnScope === null || returnScope === undefined) {
            throw new Error('Required parameter returnScope was null or undefined when calling deletePortfolioReturns.');
        }

        // verify required parameter 'returnCode' is not null or undefined
        if (returnCode === null || returnCode === undefined) {
            throw new Error('Required parameter returnCode was null or undefined when calling deletePortfolioReturns.');
        }

        // verify required parameter 'fromEffectiveAt' is not null or undefined
        if (fromEffectiveAt === null || fromEffectiveAt === undefined) {
            throw new Error('Required parameter fromEffectiveAt was null or undefined when calling deletePortfolioReturns.');
        }

        // verify required parameter 'toEffectiveAt' is not null or undefined
        if (toEffectiveAt === null || toEffectiveAt === undefined) {
            throw new Error('Required parameter toEffectiveAt was null or undefined when calling deletePortfolioReturns.');
        }

        if (fromEffectiveAt !== undefined) {
            localVarQueryParameters['fromEffectiveAt'] = ObjectSerializer.serialize(fromEffectiveAt, "string");
        }

        if (toEffectiveAt !== undefined) {
            localVarQueryParameters['toEffectiveAt'] = ObjectSerializer.serialize(toEffectiveAt, "string");
        }

        if (period !== undefined) {
            localVarQueryParameters['period'] = ObjectSerializer.serialize(period, "string");
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
     * Calculate the dispersion metric with the Aggregate Returns which are on the specified portfolio.             This works only for composites which have at least 6 constituents for a full year in.
     * @summary [EARLY ACCESS] GetAggregatedReturnsDispersionMetrics: Get the Aggregated Returns Dispersion metric
     * @param scope The scope of the Portfolio.
     * @param code The code of the  Portfolio.
     * @param aggregatedReturnsDispersionRequest The request used in the AggregatedReturnsDispersionMetric.
     * @param asAt The asAt datetime at which to retrieve the Returns. Defaults to the latest.
     */
    public async getAggregatedReturnsDispersionMetrics (scope: string, code: string, aggregatedReturnsDispersionRequest: AggregatedReturnsDispersionRequest, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CompositeDispersionResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/returns/dispersion/$aggregated'
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
            throw new Error('Required parameter scope was null or undefined when calling getAggregatedReturnsDispersionMetrics.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getAggregatedReturnsDispersionMetrics.');
        }

        // verify required parameter 'aggregatedReturnsDispersionRequest' is not null or undefined
        if (aggregatedReturnsDispersionRequest === null || aggregatedReturnsDispersionRequest === undefined) {
            throw new Error('Required parameter aggregatedReturnsDispersionRequest was null or undefined when calling getAggregatedReturnsDispersionMetrics.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
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
            body: ObjectSerializer.serialize(aggregatedReturnsDispersionRequest, "AggregatedReturnsDispersionRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: CompositeDispersionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CompositeDispersionResponse");
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
     * Calculate the Composite Returns and return this with the constituents which are included in this calculation
     * @summary [EARLY ACCESS] GetCompositeBreakdown: Get the Composite Breakdown on how the composite Returns are calculated
     * @param scope The scope of the Portfolio.
     * @param code The code of the  Portfolio.
     * @param compositeBreakdownRequest The request used in the GetCompositeBreakdown.
     * @param fromEffectiveAt The start date from which to calculate the Returns.
     * @param toEffectiveAt The end date for which to calculate the Returns.
     * @param asAt The asAt datetime at which to retrieve the Returns. Defaults to the latest.
     */
    public async getCompositeBreakdown (scope: string, code: string, compositeBreakdownRequest: CompositeBreakdownRequest, fromEffectiveAt?: string, toEffectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CompositeBreakdownResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/returns/breakdown'
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
            throw new Error('Required parameter scope was null or undefined when calling getCompositeBreakdown.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getCompositeBreakdown.');
        }

        // verify required parameter 'compositeBreakdownRequest' is not null or undefined
        if (compositeBreakdownRequest === null || compositeBreakdownRequest === undefined) {
            throw new Error('Required parameter compositeBreakdownRequest was null or undefined when calling getCompositeBreakdown.');
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

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(compositeBreakdownRequest, "CompositeBreakdownRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: CompositeBreakdownResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CompositeBreakdownResponse");
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
     * Get a particular instruction for a particular portfolio
     * @summary [EARLY ACCESS] GetInstrumentEventInstruction: Get Instrument Event Instruction
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param instrumentEventInstructionId The id of the instruction to be retrieved.
     * @param portfolioEffectiveAt The effective date at which the portfolio will be resolved. Defaults to current time if not specified.
     * @param asAt The asAt datetime at which to retrieve the instruction. Defaults to return the latest version of the instruction if not specified.
     */
    public async getInstrumentEventInstruction (scope: string, code: string, instrumentEventInstructionId: string, portfolioEffectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InstrumentEventInstruction;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/instrumenteventinstructions/{instrumentEventInstructionId}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'instrumentEventInstructionId' + '}', encodeURIComponent(String(instrumentEventInstructionId)));
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
            throw new Error('Required parameter scope was null or undefined when calling getInstrumentEventInstruction.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getInstrumentEventInstruction.');
        }

        // verify required parameter 'instrumentEventInstructionId' is not null or undefined
        if (instrumentEventInstructionId === null || instrumentEventInstructionId === undefined) {
            throw new Error('Required parameter instrumentEventInstructionId was null or undefined when calling getInstrumentEventInstruction.');
        }

        if (portfolioEffectiveAt !== undefined) {
            localVarQueryParameters['portfolioEffectiveAt'] = ObjectSerializer.serialize(portfolioEffectiveAt, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: InstrumentEventInstruction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "InstrumentEventInstruction");
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
     * Retrieve the definition of a particular portfolio.
     * @summary GetPortfolio: Get portfolio
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the portfolio definition. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the portfolio definition. Defaults to returning the latest version of the portfolio definition if not specified.
     * @param propertyKeys A list of property keys from the \&#39;Portfolio\&#39; domain to decorate onto the portfolio,              or from any domain that supports relationships to decorate onto related entities. These must take the format              {domain}/{scope}/{code}, for example \&#39;Portfolio/Manager/Id\&#39;.
     * @param relationshipDefinitionIds A list of relationship definitions that are used to decorate related entities              onto the portfolio in the response. These must take the form {relationshipDefinitionScope}/{relationshipDefinitionCode}.
     */
    public async getPortfolio (scope: string, code: string, effectiveAt?: string, asAt?: Date, propertyKeys?: Array<string>, relationshipDefinitionIds?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Portfolio;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolio.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolio.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
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
            return new Promise<{ response: http.IncomingMessage; body: Portfolio;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Portfolio");
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
     * Aggregate Returns which are on the specified portfolio.
     * @summary [DEPRECATED] GetPortfolioAggregateReturns: Aggregate Returns (This is a deprecated endpoint).
     * @param scope The scope of the Portfolio.
     * @param code The code of the  Portfolio.
     * @param returnScope The scope of the Returns.
     * @param returnCode The code of the Returns.
     * @param recipeIdScope The Recipe Scope for getting the fx rates
     * @param recipeIdCode The Recipe Code for getting the fx rates
     * @param fromEffectiveAt The start date from which to calculate the Returns.
     * @param toEffectiveAt The end date for which to calculate the Returns.
     * @param compositeMethod The method used to calculate the Portfolio performance:              Equal/Asset.
     * @param period The type of the returns used to calculate the aggregation result: Daily/Monthly.
     * @param outputFrequency The type of calculated output: Daily/Weekly/Monthly/Quarterly/Half-Yearly/Yearly.
     * @param metrics Determines what type of returns should be calculated, see https://support.lusid.com/knowledgebase/article/KA-01675/en-us for a list of available metrics.
     * @param asAt The asAt datetime at which to retrieve the Returns. Defaults to the latest.
     * @param alternativeIncDate The date from which to consider the Returns on the Portfolio, if this is different from the date when Returns begin. Can be a date string or Portfolio property.
     */
    public async getPortfolioAggregateReturns (scope: string, code: string, returnScope: string, returnCode: string, recipeIdScope?: string, recipeIdCode?: string, fromEffectiveAt?: string, toEffectiveAt?: string, compositeMethod?: string, period?: string, outputFrequency?: string, metrics?: Array<string>, asAt?: Date, alternativeIncDate?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfAggregatedReturn;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/returns/{returnScope}/{returnCode}/aggregated'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'returnScope' + '}', encodeURIComponent(String(returnScope)))
            .replace('{' + 'returnCode' + '}', encodeURIComponent(String(returnCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioAggregateReturns.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioAggregateReturns.');
        }

        // verify required parameter 'returnScope' is not null or undefined
        if (returnScope === null || returnScope === undefined) {
            throw new Error('Required parameter returnScope was null or undefined when calling getPortfolioAggregateReturns.');
        }

        // verify required parameter 'returnCode' is not null or undefined
        if (returnCode === null || returnCode === undefined) {
            throw new Error('Required parameter returnCode was null or undefined when calling getPortfolioAggregateReturns.');
        }

        if (recipeIdScope !== undefined) {
            localVarQueryParameters['recipeIdScope'] = ObjectSerializer.serialize(recipeIdScope, "string");
        }

        if (recipeIdCode !== undefined) {
            localVarQueryParameters['recipeIdCode'] = ObjectSerializer.serialize(recipeIdCode, "string");
        }

        if (fromEffectiveAt !== undefined) {
            localVarQueryParameters['fromEffectiveAt'] = ObjectSerializer.serialize(fromEffectiveAt, "string");
        }

        if (toEffectiveAt !== undefined) {
            localVarQueryParameters['toEffectiveAt'] = ObjectSerializer.serialize(toEffectiveAt, "string");
        }

        if (compositeMethod !== undefined) {
            localVarQueryParameters['compositeMethod'] = ObjectSerializer.serialize(compositeMethod, "string");
        }

        if (period !== undefined) {
            localVarQueryParameters['period'] = ObjectSerializer.serialize(period, "string");
        }

        if (outputFrequency !== undefined) {
            localVarQueryParameters['outputFrequency'] = ObjectSerializer.serialize(outputFrequency, "string");
        }

        if (metrics !== undefined) {
            localVarQueryParameters['metrics'] = ObjectSerializer.serialize(metrics, "Array<string>");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (alternativeIncDate !== undefined) {
            localVarQueryParameters['alternativeIncDate'] = ObjectSerializer.serialize(alternativeIncDate, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfAggregatedReturn;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfAggregatedReturn");
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
     * Aggregate Returns which are on the specified portfolio.
     * @summary GetPortfolioAggregatedReturns: Aggregated Returns
     * @param scope The scope of the Portfolio.
     * @param code The code of the  Portfolio.
     * @param aggregatedReturnsRequest The request used in the AggregatedReturns.
     * @param fromEffectiveAt The start date from which to calculate the Returns.
     * @param toEffectiveAt The end date for which to calculate the Returns.
     * @param asAt The asAt datetime at which to retrieve the Returns. Defaults to the latest.
     */
    public async getPortfolioAggregatedReturns (scope: string, code: string, aggregatedReturnsRequest: AggregatedReturnsRequest, fromEffectiveAt?: string, toEffectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AggregatedReturnsResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/returns/$aggregated'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioAggregatedReturns.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioAggregatedReturns.');
        }

        // verify required parameter 'aggregatedReturnsRequest' is not null or undefined
        if (aggregatedReturnsRequest === null || aggregatedReturnsRequest === undefined) {
            throw new Error('Required parameter aggregatedReturnsRequest was null or undefined when calling getPortfolioAggregatedReturns.');
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

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(aggregatedReturnsRequest, "AggregatedReturnsRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: AggregatedReturnsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "AggregatedReturnsResponse");
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
     * Get all the commands that modified a particular portfolio, including any input transactions.
     * @summary GetPortfolioCommands: Get portfolio commands
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param fromAsAt The lower bound asAt datetime (inclusive) from which to retrieve commands. There is no lower bound if this is not specified.
     * @param toAsAt The upper bound asAt datetime (inclusive) from which to retrieve commands. There is no upper bound if this is not specified.
     * @param filter Expression to filter the results.              For example, to filter on the User ID, specify \&quot;userId.id eq \&#39;string\&#39;\&quot;.              For more information about filtering, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param page The pagination token to use to continue listing commands; this value is returned from the previous call.
     * @param limit When paginating, limit the results to this number. Defaults to 500 if not specified.
     */
    public async getPortfolioCommands (scope: string, code: string, fromAsAt?: Date, toAsAt?: Date, filter?: string, page?: string, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfProcessedCommand;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/commands'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioCommands.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioCommands.');
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
     * Pass the scope and portfolio code parameters to retrieve the AccessMetadata associated with a portfolio
     * @summary GetPortfolioMetadata: Get access metadata rules for a portfolio
     * @param scope The scope of the Portfolio Access Metadata Rule to retrieve.
     * @param code Portfolio code
     * @param effectiveAt The effectiveAt datetime at which to retrieve the access metadata rule.
     * @param asAt The asAt datetime at which to retrieve the portfolio access metadata.
     */
    public async getPortfolioMetadata (scope: string, code: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: { [key: string]: Array<AccessMetadataValue>; };  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/metadata'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioMetadata.');
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
     * List all the properties of a particular portfolio.
     * @summary GetPortfolioProperties: Get portfolio properties
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param effectiveAt The effective datetime or cut label at which to list the portfolio\&#39;s properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolio\&#39;s properties. Defaults to returning the latest version of each property if not specified.
     */
    public async getPortfolioProperties (scope: string, code: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioProperties;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/properties'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioProperties.');
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
            return new Promise<{ response: http.IncomingMessage; body: PortfolioProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioProperties");
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
     * Show the complete time series (history) for a particular portfolio property.
     * @summary GetPortfolioPropertyTimeSeries: Get portfolio property time series
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param propertyKey The property key of the property whose history to show.              This must be from the \&#39;Portfolio\&#39; domain and in the format {domain}/{scope}/{code}, for example \&#39;Portfolio/Manager/Id\&#39;.
     * @param portfolioEffectiveAt The effective datetime used to resolve the portfolio. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to show the history. Defaults to returning the current datetime if not supplied.
     * @param filter Expression to filter the results. For more information about filtering,              see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param page The pagination token to use to continue listing properties; this value is returned from              the previous call. If a pagination token is provided, the filter, portfolioEffectiveAt, and asAt fields              must not have changed since the original request.
     * @param limit When paginating, limit the results to this number.
     */
    public async getPortfolioPropertyTimeSeries (scope: string, code: string, propertyKey: string, portfolioEffectiveAt?: string, asAt?: Date, filter?: string, page?: string, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPropertyInterval;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/properties/time-series'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioPropertyTimeSeries.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioPropertyTimeSeries.');
        }

        // verify required parameter 'propertyKey' is not null or undefined
        if (propertyKey === null || propertyKey === undefined) {
            throw new Error('Required parameter propertyKey was null or undefined when calling getPortfolioPropertyTimeSeries.');
        }

        if (propertyKey !== undefined) {
            localVarQueryParameters['propertyKey'] = ObjectSerializer.serialize(propertyKey, "string");
        }

        if (portfolioEffectiveAt !== undefined) {
            localVarQueryParameters['portfolioEffectiveAt'] = ObjectSerializer.serialize(portfolioEffectiveAt, "string");
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
     * Get relationships for a particular portfolio.
     * @summary GetPortfolioRelationships: Get portfolio relationships
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param effectiveAt The effective datetime or cut label at which to retrieve relationships. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve relationships. Defaults to returning the latest LUSID AsAt time if not specified.
     * @param filter Expression to filter the relationships. Provide a null or empty string for this field until further notice.
     * @param identifierTypes Identifier types (as property keys) used for referencing Persons or Legal Entities.              These can be specified from the \&#39;Person\&#39; or \&#39;LegalEntity\&#39; domains and have the format {domain}/{scope}/{code}, for example              \&#39;Person/CompanyDetails/Role\&#39;. An Empty array may be used to return all related Entities.
     */
    public async getPortfolioRelationships (scope: string, code: string, effectiveAt?: string, asAt?: Date, filter?: string, identifierTypes?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfRelationship;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/relationships'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioRelationships.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioRelationships.');
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
     * Get Returns which are on the specified portfolio.
     * @summary GetPortfolioReturns: Get Returns
     * @param scope The scope of the Portfolio.
     * @param code The code of the  Portfolio.
     * @param returnScope The scope of the Returns.
     * @param returnCode The code of the Returns.
     * @param fromEffectiveAt The start date from which to get the Returns.
     * @param toEffectiveAt The end date from which to get the Returns.
     * @param period Show the Returns on a Daily or Monthly period. Defaults to Daily.
     * @param asAt The asAt datetime at which to retrieve the Returns. Defaults to the latest.
     */
    public async getPortfolioReturns (scope: string, code: string, returnScope: string, returnCode: string, fromEffectiveAt?: string, toEffectiveAt?: string, period?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPerformanceReturn;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/returns/{returnScope}/{returnCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'returnScope' + '}', encodeURIComponent(String(returnScope)))
            .replace('{' + 'returnCode' + '}', encodeURIComponent(String(returnCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioReturns.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioReturns.');
        }

        // verify required parameter 'returnScope' is not null or undefined
        if (returnScope === null || returnScope === undefined) {
            throw new Error('Required parameter returnScope was null or undefined when calling getPortfolioReturns.');
        }

        // verify required parameter 'returnCode' is not null or undefined
        if (returnCode === null || returnCode === undefined) {
            throw new Error('Required parameter returnCode was null or undefined when calling getPortfolioReturns.');
        }

        if (fromEffectiveAt !== undefined) {
            localVarQueryParameters['fromEffectiveAt'] = ObjectSerializer.serialize(fromEffectiveAt, "string");
        }

        if (toEffectiveAt !== undefined) {
            localVarQueryParameters['toEffectiveAt'] = ObjectSerializer.serialize(toEffectiveAt, "string");
        }

        if (period !== undefined) {
            localVarQueryParameters['period'] = ObjectSerializer.serialize(period, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfPerformanceReturn;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfPerformanceReturn");
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
     * Get a specific portfolio access metadata rule by specifying the corresponding identifier parts                No matching will be performed through this endpoint. To retrieve a rule, it is necessary to specify, exactly, the identifier of the rule
     * @summary [EARLY ACCESS] GetPortfoliosAccessMetadataByKey: Get an entry identified by a metadataKey in the access metadata object
     * @param scope The scope of the Portfolio Access Metadata Rule to retrieve.
     * @param code The code of the portfolio
     * @param metadataKey Key of the metadata to retrieve
     * @param effectiveAt The effective date of the rule
     * @param asAt The asAt datetime at which to retrieve the portfolio access metadata.
     */
    public async getPortfoliosAccessMetadataByKey (scope: string, code: string, metadataKey: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<AccessMetadataValue>;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/metadata/{metadataKey}'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfoliosAccessMetadataByKey.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfoliosAccessMetadataByKey.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling getPortfoliosAccessMetadataByKey.');
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
     * Lists all instructions for a particular portfolio
     * @summary [EARLY ACCESS] ListInstrumentEventInstructions: List Instrument Event Instructions
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param portfolioEffectiveAt The effective date at which the portfolio will be resolved. Defaults to current time if not specified.
     * @param asAt The asAt datetime at which to retrieve the instructions. Defaults to latest if not specified.
     * @param page The pagination token to use to continue listing instructions; this value is returned from the previous call.              If a pagination token is provided, the filter, effectiveAt and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results. For more information about filtering              results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param sortBy A list of field names to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;.
     */
    public async listInstrumentEventInstructions (scope: string, code: string, portfolioEffectiveAt?: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfInstrumentEventInstruction;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/instrumenteventinstructions'
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
            throw new Error('Required parameter scope was null or undefined when calling listInstrumentEventInstructions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listInstrumentEventInstructions.');
        }

        if (portfolioEffectiveAt !== undefined) {
            localVarQueryParameters['portfolioEffectiveAt'] = ObjectSerializer.serialize(portfolioEffectiveAt, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfInstrumentEventInstruction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfInstrumentEventInstruction");
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
     * List all the properties of a particular portfolio.
     * @summary [EARLY ACCESS] ListPortfolioProperties: Get portfolio properties
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param effectiveAt The effective datetime or cut label at which to list the portfolio\&#39;s properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolio\&#39;s properties. Defaults to returning the latest version of each property if not specified.
     * @param page The pagination token to use to continue listing commands; this value is returned from the previous call.
     * @param limit When paginating, limit the results per page to this number.
     */
    public async listPortfolioProperties (scope: string, code: string, effectiveAt?: string, asAt?: Date, page?: string, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfProperty;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/properties/list'
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
            throw new Error('Required parameter scope was null or undefined when calling listPortfolioProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listPortfolioProperties.');
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfProperty;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfProperty");
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
     * List all the portfolios matching particular criteria.
     * @summary ListPortfolios: List portfolios
     * @param effectiveAt The effective datetime or cut label at which to list the portfolios. Defaults to the current LUSID              system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolios. Defaults to returning the latest version              of each portfolio if not specified.
     * @param page The pagination token to use to continue listing portfolios; this              value is returned from the previous call. If a pagination token is provided, the filter, effectiveAt              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results.              For example, to filter on the transaction type, specify \&quot;type eq \&#39;Transaction\&#39;\&quot;. For more information about filtering              results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;.
     * @param query Expression specifying the criteria that the returned portfolios must meet. For example, to see which              portfolios have holdings in instruments with a LusidInstrumentId (LUID) of \&#39;LUID_PPA8HI6M\&#39; or a Figi of \&#39;BBG000BLNNH6\&#39;,              specify \&quot;instrument.identifiers in ((\&#39;LusidInstrumentId\&#39;, \&#39;LUID_PPA8HI6M\&#39;), (\&#39;Figi\&#39;, \&#39;BBG000BLNNH6\&#39;))\&quot;.
     * @param propertyKeys A list of property keys from the \&#39;Portfolio\&#39; domain to decorate onto each portfolio,              or from any domain that supports relationships to decorate onto related entities. These must take the              format {domain}/{scope}/{code}, for example \&#39;Portfolio/Manager/Id\&#39;.
     * @param relationshipDefinitionIds A list of relationship definitions that are used to decorate related entities              onto the portfolios in the response. These must take the form {relationshipDefinitionScope}/{relationshipDefinitionCode}.
     */
    public async listPortfolios (effectiveAt?: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, query?: string, propertyKeys?: Array<string>, relationshipDefinitionIds?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolio;  }> {
        const localVarPath = this.basePath + '/api/portfolios';
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

        if (query !== undefined) {
            localVarQueryParameters['query'] = ObjectSerializer.serialize(query, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolio;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfPortfolio");
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
     * List all the portfolios in a particular scope.
     * @summary ListPortfoliosForScope: List portfolios for scope
     * @param scope The scope whose portfolios to list.
     * @param effectiveAt The effective datetime or cut label at which to list the portfolios. Defaults to the current LUSID              system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolios. Defaults to returning the latest version              of each portfolio if not specified.
     * @param page The pagination token to use to continue listing portfolios. This  value is returned from the previous call. If a pagination token is provided, the filter, effectiveAt  and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results.              For example, to return only transactions with a transaction type of \&#39;Buy\&#39;, specify \&quot;type eq \&#39;Buy\&#39;\&quot;.              For more information about filtering results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;.
     * @param propertyKeys A list of property keys from the \&#39;Portfolio\&#39; domain to decorate onto each portfolio,              or from any domain that supports relationships to decorate onto related entities. These must take the              format {domain}/{scope}/{code}, for example \&#39;Portfolio/Manager/Id\&#39;.
     * @param relationshipDefinitionIds A list of relationship definitions that are used to decorate related entities              onto the portfolios in the response. These must take the form {relationshipDefinitionScope}/{relationshipDefinitionCode}.
     */
    public async listPortfoliosForScope (scope: string, effectiveAt?: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, propertyKeys?: Array<string>, relationshipDefinitionIds?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolio;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}'
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
            throw new Error('Required parameter scope was null or undefined when calling listPortfoliosForScope.');
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

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolio;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfPortfolio");
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
     * Create or update certain fields for a particular  portfolio.  The behaviour is defined by the JSON Patch specification.    Currently supported fields are: Created, InstrumentScopes, Type.
     * @summary PatchPortfolio: Patch portfolio.
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the              scope this uniquely identifies the portfolio.
     * @param operation The json patch document. For more check: https://datatracker.ietf.org/doc/html/rfc6902.
     */
    public async patchPortfolio (scope: string, code: string, operation: Array<Operation>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Portfolio;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}'
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
            throw new Error('Required parameter scope was null or undefined when calling patchPortfolio.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling patchPortfolio.');
        }

        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling patchPortfolio.');
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
            body: ObjectSerializer.serialize(operation, "Array<Operation>")
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
            return new Promise<{ response: http.IncomingMessage; body: Portfolio;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Portfolio");
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
     * Patch Portfolio Access Metadata Rules in a single scope.  The behaviour is defined by the JSON Patch specification.                Currently only \'add\' is a supported operation on the patch document.    Currently only valid metadata keys are supported paths on the patch document.    The response will return any affected Portfolio Access Metadata rules or a failure message if unsuccessful.    It is important to always check to verify success (or failure).                Multiple rules for a metadataKey can exist with different effective at dates, when resources are accessed the rule that is active for the current time will be fetched.
     * @summary [EARLY ACCESS] PatchPortfolioAccessMetadata: Patch Access Metadata rules for a Portfolio.
     * @param scope The scope of the Portfolio Access Metadata Rule.
     * @param code Portfolio code
     * @param accessMetadataOperation The Json Patch document
     * @param effectiveAt The date this rule will effective from
     * @param effectiveUntil The effective date until which the Access Metadata is valid. If not supplied this will be valid indefinitely, or until the next \&#39;effectiveAt\&#39; date of the Access Metadata
     */
    public async patchPortfolioAccessMetadata (scope: string, code: string, accessMetadataOperation: Array<AccessMetadataOperation>, effectiveAt?: string, effectiveUntil?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: { [key: string]: Array<AccessMetadataValue>; };  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/metadata'
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
            throw new Error('Required parameter scope was null or undefined when calling patchPortfolioAccessMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling patchPortfolioAccessMetadata.');
        }

        // verify required parameter 'accessMetadataOperation' is not null or undefined
        if (accessMetadataOperation === null || accessMetadataOperation === undefined) {
            throw new Error('Required parameter accessMetadataOperation was null or undefined when calling patchPortfolioAccessMetadata.');
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
     * Update the definition of a particular portfolio.                Note that not all elements of a portfolio definition are  modifiable due to the potential implications for data already stored.
     * @summary UpdatePortfolio: Update portfolio
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param updatePortfolioRequest The updated portfolio definition.
     * @param effectiveAt The effective datetime or cut label at which to update the definition. Defaults to the current               LUSID system datetime if not specified.
     */
    public async updatePortfolio (scope: string, code: string, updatePortfolioRequest: UpdatePortfolioRequest, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Portfolio;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}'
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
            throw new Error('Required parameter scope was null or undefined when calling updatePortfolio.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling updatePortfolio.');
        }

        // verify required parameter 'updatePortfolioRequest' is not null or undefined
        if (updatePortfolioRequest === null || updatePortfolioRequest === undefined) {
            throw new Error('Required parameter updatePortfolioRequest was null or undefined when calling updatePortfolio.');
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
            body: ObjectSerializer.serialize(updatePortfolioRequest, "UpdatePortfolioRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Portfolio;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Portfolio");
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
     * Batch upsert for instrument event instructions, for the portfolio or individual holdings
     * @summary [EARLY ACCESS] UpsertInstrumentEventInstructions: Upsert Instrument Event Instructions
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param successMode Whether the batch request should fail atomically or in a partial fashion - allowed values: Atomic, Partial (default)
     * @param requestBody The instructions to be upserted to the portfolio.
     * @param portfolioEffectiveAt The effective date at which the portfolio will be resolved. Defaults to current time if not specified.
     */
    public async upsertInstrumentEventInstructions (scope: string, code: string, successMode: string, requestBody: { [key: string]: InstrumentEventInstructionRequest; }, portfolioEffectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InstrumentEventInstructionsResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/instrumenteventinstructions'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertInstrumentEventInstructions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertInstrumentEventInstructions.');
        }

        // verify required parameter 'successMode' is not null or undefined
        if (successMode === null || successMode === undefined) {
            throw new Error('Required parameter successMode was null or undefined when calling upsertInstrumentEventInstructions.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling upsertInstrumentEventInstructions.');
        }

        if (portfolioEffectiveAt !== undefined) {
            localVarQueryParameters['portfolioEffectiveAt'] = ObjectSerializer.serialize(portfolioEffectiveAt, "string");
        }

        if (successMode !== undefined) {
            localVarQueryParameters['successMode'] = ObjectSerializer.serialize(successMode, "string");
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: InstrumentEventInstructionRequest; }")
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
            return new Promise<{ response: http.IncomingMessage; body: InstrumentEventInstructionsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "InstrumentEventInstructionsResponse");
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
     * Update or insert one Portfolio Access Metadata Rule in a single scope. An item will be updated if it already exists  and inserted if it does not.    The response will return the successfully updated or inserted Portfolio Access Metadata Rule or failure message if unsuccessful    It is important to always check to verify success (or failure).                Multiple rules for a metadataKey can exists with different effective at dates, when resources are accessed the rule that is active for the current time will be fetched
     * @summary UpsertPortfolioAccessMetadata: Upsert a Portfolio Access Metadata Rule associated with specific metadataKey. This creates or updates the data in LUSID.
     * @param scope The scope to use when updating or inserting the Portfolio Access Metadata Rule.
     * @param code Portfolio code
     * @param metadataKey Key of the access metadata to upsert
     * @param upsertPortfolioAccessMetadataRequest The Portfolio Access Metadata Rule to update or insert
     * @param effectiveAt The date this rule will effective from
     * @param effectiveUntil The effective date until which the Access Metadata is valid. If not supplied this will be valid indefinitely, or until the next \&#39;effectiveAt\&#39; date of the Access Metadata
     */
    public async upsertPortfolioAccessMetadata (scope: string, code: string, metadataKey: string, upsertPortfolioAccessMetadataRequest: UpsertPortfolioAccessMetadataRequest, effectiveAt?: string, effectiveUntil?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfAccessMetadataValueOf;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/metadata/{metadataKey}'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertPortfolioAccessMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertPortfolioAccessMetadata.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling upsertPortfolioAccessMetadata.');
        }

        // verify required parameter 'upsertPortfolioAccessMetadataRequest' is not null or undefined
        if (upsertPortfolioAccessMetadataRequest === null || upsertPortfolioAccessMetadataRequest === undefined) {
            throw new Error('Required parameter upsertPortfolioAccessMetadataRequest was null or undefined when calling upsertPortfolioAccessMetadata.');
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
            body: ObjectSerializer.serialize(upsertPortfolioAccessMetadataRequest, "UpsertPortfolioAccessMetadataRequest")
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
    /**
     * Create or update one or more properties for a particular portfolio. A property is updated if it  already exists and created if it does not. All properties must be from the \'Portfolio\' domain.                Properties have an <i>effectiveFrom</i> datetime from which the property is valid, and an <i>effectiveUntil</i>  datetime until which it is valid. Not supplying an <i>effectiveUntil</i> datetime results in the property being  valid indefinitely, or until the next <i>effectiveFrom</i> datetime of the property.
     * @summary UpsertPortfolioProperties: Upsert portfolio properties
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param requestBody The properties to be created or updated. Each property in               the request must be keyed by its unique property key. This has the format {domain}/{scope}/{code}, for example               \&#39;Portfolio/Manager/Id\&#39;.
     */
    public async upsertPortfolioProperties (scope: string, code: string, requestBody: { [key: string]: Property; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioProperties;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/properties'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertPortfolioProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertPortfolioProperties.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling upsertPortfolioProperties.');
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
            return new Promise<{ response: http.IncomingMessage; body: PortfolioProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioProperties");
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
     * Update or insert returns into the specified portfolio.
     * @summary UpsertPortfolioReturns: Upsert Returns
     * @param scope The scope of the Portfolio.
     * @param code The code of the  Portfolio.
     * @param returnScope The scope of the Returns.
     * @param returnCode The code of the Returns.
     * @param performanceReturn This contains the Returns which need to be upsert.
     */
    public async upsertPortfolioReturns (scope: string, code: string, returnScope: string, returnCode: string, performanceReturn: Array<PerformanceReturn>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpsertReturnsResponse;  }> {
        const localVarPath = this.basePath + '/api/portfolios/{scope}/{code}/returns/{returnScope}/{returnCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'returnScope' + '}', encodeURIComponent(String(returnScope)))
            .replace('{' + 'returnCode' + '}', encodeURIComponent(String(returnCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling upsertPortfolioReturns.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertPortfolioReturns.');
        }

        // verify required parameter 'returnScope' is not null or undefined
        if (returnScope === null || returnScope === undefined) {
            throw new Error('Required parameter returnScope was null or undefined when calling upsertPortfolioReturns.');
        }

        // verify required parameter 'returnCode' is not null or undefined
        if (returnCode === null || returnCode === undefined) {
            throw new Error('Required parameter returnCode was null or undefined when calling upsertPortfolioReturns.');
        }

        // verify required parameter 'performanceReturn' is not null or undefined
        if (performanceReturn === null || performanceReturn === undefined) {
            throw new Error('Required parameter performanceReturn was null or undefined when calling upsertPortfolioReturns.');
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
            body: ObjectSerializer.serialize(performanceReturn, "Array<PerformanceReturn>")
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
            return new Promise<{ response: http.IncomingMessage; body: UpsertReturnsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UpsertReturnsResponse");
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
