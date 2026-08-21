/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](../../../api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application   | Description                                                                       | API / Swagger Documentation                          | |---------------|-----------------------------------------------------------------------------------|------------------------------------------------------| | LUSID         | Open, API-first, developer-friendly investment data platform.                     | [Swagger](../../../api/swagger/index.html)           | | Web app       | User-facing front end for LUSID.                                                  | [Swagger](../../../app/swagger/index.html)           | | Scheduler     | Automated job scheduler.                                                          | [Swagger](../../../scheduler2/swagger/index.html)    | | Insights      | Monitoring and troubleshooting service.                                           | [Swagger](../../../insights/swagger/index.html)      | | Identity      | Identity management for LUSID (in conjunction with Access)                        | [Swagger](../../../identity/swagger/index.html)      | | Access        | Access control for LUSID (in conjunction with Identity)                           | [Swagger](../../../access/swagger/index.html)        | | Drive         | Secure file repository and manager for collaboration.                             | [Swagger](../../../drive/swagger/index.html)         | | Luminesce     | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](../../../honeycomb/swagger/index.html)     | | Notification  | Notification service.                                                             | [Swagger](../../../notification/swagger/index.html)  | | Configuration | File store for secrets and other sensitive information.                           | [Swagger](../../../configuration/swagger/index.html) | | Workflow      | Workflow service.                                                                 | [Swagger](../../../workflow/swagger/index.html)      |   # Error Codes  | Code|Name|Description | | ---|---|--- | | <a name=\"-10\">-10</a>|Server Configuration Error|  | | <a name=\"-1\">-1</a>|Unknown error|An unexpected error was encountered on our side. | | <a name=\"102\">102</a>|Version Not Found|  | | <a name=\"103\">103</a>|Api Rate Limit Violation|  | | <a name=\"104\">104</a>|Instrument Not Found|  | | <a name=\"105\">105</a>|Property Not Found|  | | <a name=\"106\">106</a>|Portfolio Recursion Depth|  | | <a name=\"108\">108</a>|Group Not Found|  | | <a name=\"109\">109</a>|Portfolio Not Found|  | | <a name=\"110\">110</a>|Property Schema Not Found|  | | <a name=\"111\">111</a>|Portfolio Ancestry Not Found|  | | <a name=\"112\">112</a>|Portfolio With Id Already Exists|  | | <a name=\"113\">113</a>|Orphaned Portfolio|  | | <a name=\"119\">119</a>|Missing Base Claims|  | | <a name=\"121\">121</a>|Property Not Defined|  | | <a name=\"122\">122</a>|Cannot Delete System Property|  | | <a name=\"123\">123</a>|Cannot Modify Immutable Property Field|  | | <a name=\"124\">124</a>|Property Already Exists|  | | <a name=\"125\">125</a>|Invalid Property Life Time|  | | <a name=\"126\">126</a>|Property Constraint Style Excludes Properties|  | | <a name=\"127\">127</a>|Cannot Modify Default Data Type|  | | <a name=\"128\">128</a>|Group Already Exists|  | | <a name=\"129\">129</a>|No Such Data Type|  | | <a name=\"130\">130</a>|Undefined Value For Data Type|  | | <a name=\"131\">131</a>|Unsupported Value Type Defined On Data Type|  | | <a name=\"132\">132</a>|Validation Error|  | | <a name=\"133\">133</a>|Loop Detected In Group Hierarchy|  | | <a name=\"134\">134</a>|Undefined Acceptable Values|  | | <a name=\"135\">135</a>|Sub Group Already Exists|  | | <a name=\"138\">138</a>|Price Source Not Found|  | | <a name=\"139\">139</a>|Analytic Store Not Found|  | | <a name=\"141\">141</a>|Analytic Store Already Exists|  | | <a name=\"143\">143</a>|Client Instrument Already Exists|  | | <a name=\"144\">144</a>|Duplicate In Parameter Set|  | | <a name=\"147\">147</a>|Results Not Found|  | | <a name=\"148\">148</a>|Order Field Not In Result Set|  | | <a name=\"149\">149</a>|Operation Failed|  | | <a name=\"150\">150</a>|Elastic Search Error|  | | <a name=\"151\">151</a>|Invalid Parameter Value|  | | <a name=\"153\">153</a>|Command Processing Failure|  | | <a name=\"154\">154</a>|Entity State Construction Failure|  | | <a name=\"155\">155</a>|Entity Timeline Does Not Exist|  | | <a name=\"156\">156</a>|Concurrency Conflict Failure|  | | <a name=\"157\">157</a>|Invalid Request|  | | <a name=\"158\">158</a>|Event Publish Unknown|  | | <a name=\"159\">159</a>|Event Query Failure|  | | <a name=\"160\">160</a>|Blob Did Not Exist|  | | <a name=\"162\">162</a>|Sub System Request Failure|  | | <a name=\"163\">163</a>|Sub System Configuration Failure|  | | <a name=\"165\">165</a>|Failed To Delete|  | | <a name=\"166\">166</a>|Upsert Client Instrument Failure|  | | <a name=\"167\">167</a>|Illegal As At Interval|  | | <a name=\"168\">168</a>|Illegal Bitemporal Query|  | | <a name=\"169\">169</a>|Invalid Alternate Id|  | | <a name=\"170\">170</a>|Cannot Add Non-Writable Properties To Entity|  | | <a name=\"171\">171</a>|Entity Already Exists In Group|  | | <a name=\"172\">172</a>|Entity With Id Does Not Exist|  | | <a name=\"173\">173</a>|Entity With Id Already Exists|  | | <a name=\"174\">174</a>|Derived Portfolio Details Do Not Exist|  | | <a name=\"175\">175</a>|Entity Not In Group|  | | <a name=\"176\">176</a>|Portfolio With Name Already Exists|  | | <a name=\"177\">177</a>|Invalid Transactions|  | | <a name=\"178\">178</a>|Reference Portfolio Not Found|  | | <a name=\"179\">179</a>|Duplicate Id|  | | <a name=\"180\">180</a>|Command Retrieval Failure|  | | <a name=\"181\">181</a>|Data Filter Application Failure|  | | <a name=\"182\">182</a>|Search Failed|  | | <a name=\"183\">183</a>|Movements Engine Configuration Key Failure|  | | <a name=\"184\">184</a>|Fx Rate Source Not Found|  | | <a name=\"185\">185</a>|Accrual Source Not Found|  | | <a name=\"186\">186</a>|Access Denied|  | | <a name=\"187\">187</a>|Invalid Identity Token|  | | <a name=\"188\">188</a>|Invalid Request Headers|  | | <a name=\"189\">189</a>|Price Not Found|  | | <a name=\"190\">190</a>|Invalid Sub Holding Keys Provided|  | | <a name=\"191\">191</a>|Duplicate Sub Holding Keys Provided|  | | <a name=\"192\">192</a>|Cut Definition Not Found|  | | <a name=\"193\">193</a>|Cut Definition Invalid|  | | <a name=\"194\">194</a>|Time Variant Property Deletion Date Unspecified|  | | <a name=\"195\">195</a>|Perpetual Property Deletion Date Specified|  | | <a name=\"196\">196</a>|Time Variant Property Upsert Date Unspecified|  | | <a name=\"197\">197</a>|Perpetual Property Upsert Date Specified|  | | <a name=\"200\">200</a>|Invalid Unit For Data Type|  | | <a name=\"201\">201</a>|Invalid Type For Data Type|  | | <a name=\"202\">202</a>|Invalid Value For Data Type|  | | <a name=\"203\">203</a>|Unit Not Defined For Data Type|  | | <a name=\"204\">204</a>|Units Not Supported On Data Type|  | | <a name=\"205\">205</a>|Cannot Specify Units On Data Type|  | | <a name=\"206\">206</a>|Unit Schema Inconsistent With Data Type|  | | <a name=\"207\">207</a>|Unit Definition Not Specified|  | | <a name=\"208\">208</a>|Duplicate Unit Definitions Specified|  | | <a name=\"209\">209</a>|Invalid Units Definition|  | | <a name=\"210\">210</a>|Invalid Instrument Identifier Unit|  | | <a name=\"211\">211</a>|Holdings Adjustment Does Not Exist|  | | <a name=\"212\">212</a>|Could Not Build Excel Url|  | | <a name=\"213\">213</a>|Could Not Get Excel Version|  | | <a name=\"214\">214</a>|Instrument By Code Not Found|  | | <a name=\"215\">215</a>|Entity Schema Does Not Exist|  | | <a name=\"216\">216</a>|Feature Not Supported On Portfolio Type|  | | <a name=\"217\">217</a>|Quote Not Found|  | | <a name=\"218\">218</a>|Invalid Quote Identifier|  | | <a name=\"219\">219</a>|Invalid Metric For Data Type|  | | <a name=\"220\">220</a>|Invalid Instrument Definition|  | | <a name=\"221\">221</a>|Instrument Upsert Failure|  | | <a name=\"222\">222</a>|Reference Portfolio Request Not Supported|  | | <a name=\"223\">223</a>|Transaction Portfolio Request Not Supported|  | | <a name=\"224\">224</a>|Invalid Property Value Assignment|  | | <a name=\"230\">230</a>|Transaction Type Not Found|  | | <a name=\"231\">231</a>|Transaction Type Duplication|  | | <a name=\"232\">232</a>|Portfolio Does Not Exist At Given Date|  | | <a name=\"233\">233</a>|Query Parser Failure|  | | <a name=\"234\">234</a>|Duplicate Constituent|  | | <a name=\"235\">235</a>|Unresolved Instrument Constituent|  | | <a name=\"236\">236</a>|Unresolved Instrument In Transition|  | | <a name=\"237\">237</a>|Missing Side Definitions|  | | <a name=\"240\">240</a>|Duplicate Calculations Failure|  | | <a name=\"299\">299</a>|Invalid Recipe|  | | <a name=\"300\">300</a>|Missing Recipe|  | | <a name=\"301\">301</a>|Dependencies|  | | <a name=\"304\">304</a>|Portfolio Preprocess Failure|  | | <a name=\"310\">310</a>|Valuation Engine Failure|  | | <a name=\"311\">311</a>|Task Factory Failure|  | | <a name=\"312\">312</a>|Task Evaluation Failure|  | | <a name=\"313\">313</a>|Task Generation Failure|  | | <a name=\"314\">314</a>|Engine Configuration Failure|  | | <a name=\"315\">315</a>|Model Specification Failure|  | | <a name=\"320\">320</a>|Market Data Key Failure|  | | <a name=\"321\">321</a>|Market Resolver Failure|  | | <a name=\"322\">322</a>|Market Data Failure|  | | <a name=\"330\">330</a>|Curve Failure|  | | <a name=\"331\">331</a>|Volatility Surface Failure|  | | <a name=\"332\">332</a>|Volatility Cube Failure|  | | <a name=\"350\">350</a>|Instrument Failure|  | | <a name=\"351\">351</a>|Cash Flows Failure|  | | <a name=\"352\">352</a>|Reference Data Failure|  | | <a name=\"360\">360</a>|Aggregation Failure|  | | <a name=\"361\">361</a>|Aggregation Measure Failure|  | | <a name=\"370\">370</a>|Result Retrieval Failure|  | | <a name=\"371\">371</a>|Result Processing Failure|  | | <a name=\"372\">372</a>|Vendor Result Processing Failure|  | | <a name=\"373\">373</a>|Vendor Result Mapping Failure|  | | <a name=\"374\">374</a>|Vendor Library Unauthorised|  | | <a name=\"375\">375</a>|Vendor Connectivity Error|  | | <a name=\"376\">376</a>|Vendor Interface Error|  | | <a name=\"377\">377</a>|Vendor Pricing Failure|  | | <a name=\"378\">378</a>|Vendor Translation Failure|  | | <a name=\"379\">379</a>|Vendor Key Mapping Failure|  | | <a name=\"380\">380</a>|Vendor Reflection Failure|  | | <a name=\"381\">381</a>|Vendor Process Failure|  | | <a name=\"382\">382</a>|Vendor System Failure|  | | <a name=\"390\">390</a>|Attempt To Upsert Duplicate Quotes|  | | <a name=\"391\">391</a>|Corporate Action Source Does Not Exist|  | | <a name=\"392\">392</a>|Corporate Action Source Already Exists|  | | <a name=\"393\">393</a>|Instrument Identifier Already In Use|  | | <a name=\"394\">394</a>|Properties Not Found|  | | <a name=\"395\">395</a>|Batch Operation Aborted|  | | <a name=\"400\">400</a>|Invalid Iso4217 Currency Code|  | | <a name=\"401\">401</a>|Cannot Assign Instrument Identifier To Currency|  | | <a name=\"402\">402</a>|Cannot Assign Currency Identifier To Non Currency|  | | <a name=\"403\">403</a>|Currency Instrument Cannot Be Deleted|  | | <a name=\"404\">404</a>|Currency Instrument Cannot Have Economic Definition|  | | <a name=\"405\">405</a>|Currency Instrument Cannot Have Lookthrough Portfolio|  | | <a name=\"406\">406</a>|Cannot Create Currency Instrument With Multiple Identifiers|  | | <a name=\"407\">407</a>|Specified Currency Is Undefined|  | | <a name=\"410\">410</a>|Index Does Not Exist|  | | <a name=\"411\">411</a>|Sort Field Does Not Exist|  | | <a name=\"413\">413</a>|Negative Pagination Parameters|  | | <a name=\"414\">414</a>|Invalid Search Syntax|  | | <a name=\"415\">415</a>|Filter Execution Timeout|  | | <a name=\"420\">420</a>|Side Definition Inconsistent|  | | <a name=\"450\">450</a>|Invalid Quote Access Metadata Rule|  | | <a name=\"451\">451</a>|Access Metadata Not Found|  | | <a name=\"452\">452</a>|Invalid Access Metadata Identifier|  | | <a name=\"460\">460</a>|Standard Resource Not Found|  | | <a name=\"461\">461</a>|Standard Resource Conflict|  | | <a name=\"462\">462</a>|Calendar Not Found|  | | <a name=\"463\">463</a>|Date In A Calendar Not Found|  | | <a name=\"464\">464</a>|Invalid Date Source Data|  | | <a name=\"465\">465</a>|Invalid Timezone|  | | <a name=\"601\">601</a>|Person Identifier Already In Use|  | | <a name=\"602\">602</a>|Person Not Found|  | | <a name=\"603\">603</a>|Cannot Set Identifier|  | | <a name=\"617\">617</a>|Invalid Recipe Specification In Request|  | | <a name=\"618\">618</a>|Inline Recipe Deserialisation Failure|  | | <a name=\"619\">619</a>|Identifier Types Not Set For Entity|  | | <a name=\"620\">620</a>|Cannot Delete All Client Defined Identifiers|  | | <a name=\"650\">650</a>|The Order requested was not found.|  | | <a name=\"654\">654</a>|The Allocation requested was not found.|  | | <a name=\"655\">655</a>|Cannot build the fx forward target with the given holdings.|  | | <a name=\"656\">656</a>|Group does not contain expected entities.|  | | <a name=\"665\">665</a>|Destination directory not found|  | | <a name=\"667\">667</a>|Relation definition already exists|  | | <a name=\"672\">672</a>|Could not retrieve file contents|  | | <a name=\"673\">673</a>|Missing entitlements for entities in Group|  | | <a name=\"674\">674</a>|Next Best Action not found|  | | <a name=\"676\">676</a>|Relation definition not defined|  | | <a name=\"677\">677</a>|Invalid entity identifier for relation|  | | <a name=\"681\">681</a>|Sorting by specified field not supported|One or more of the provided fields to order by were either invalid or not supported. | | <a name=\"682\">682</a>|Too many fields to sort by|The number of fields to sort the data by exceeds the number allowed by the endpoint | | <a name=\"684\">684</a>|Sequence Not Found|  | | <a name=\"685\">685</a>|Sequence Already Exists|  | | <a name=\"686\">686</a>|Non-cycling sequence has been exhausted|  | | <a name=\"687\">687</a>|Legal Entity Identifier Already In Use|  | | <a name=\"688\">688</a>|Legal Entity Not Found|  | | <a name=\"689\">689</a>|The supplied pagination token is invalid|  | | <a name=\"690\">690</a>|Property Type Is Not Supported|  | | <a name=\"691\">691</a>|Multiple Tax-lots For Currency Type Is Not Supported|  | | <a name=\"692\">692</a>|This endpoint does not support impersonation|  | | <a name=\"693\">693</a>|Entity type is not supported for Relationship|  | | <a name=\"694\">694</a>|Relationship Validation Failure|  | | <a name=\"695\">695</a>|Relationship Not Found|  | | <a name=\"697\">697</a>|Derived Property Formula No Longer Valid|  | | <a name=\"698\">698</a>|Story is not available|  | | <a name=\"703\">703</a>|Corporate Action Does Not Exist|  | | <a name=\"720\">720</a>|The provided sort and filter combination is not valid|  | | <a name=\"721\">721</a>|A2B generation failed|  | | <a name=\"722\">722</a>|Aggregated Return Calculation Failure|  | | <a name=\"723\">723</a>|Custom Entity Definition Identifier Already In Use|  | | <a name=\"724\">724</a>|Custom Entity Definition Not Found|  | | <a name=\"725\">725</a>|The Placement requested was not found.|  | | <a name=\"726\">726</a>|The Execution requested was not found.|  | | <a name=\"727\">727</a>|The Block requested was not found.|  | | <a name=\"728\">728</a>|The Participation requested was not found.|  | | <a name=\"729\">729</a>|The Package requested was not found.|  | | <a name=\"730\">730</a>|The OrderInstruction requested was not found.|  | | <a name=\"732\">732</a>|Custom Entity not found.|  | | <a name=\"733\">733</a>|Custom Entity Identifier already in use.|  | | <a name=\"735\">735</a>|Calculation Failed.|  | | <a name=\"736\">736</a>|An expected key on HttpResponse is missing.|  | | <a name=\"737\">737</a>|A required fee detail is missing.|  | | <a name=\"738\">738</a>|Zero rows were returned from Luminesce|  | | <a name=\"739\">739</a>|Provided Weekend Mask was invalid|  | | <a name=\"742\">742</a>|Custom Entity fields do not match the definition|  | | <a name=\"746\">746</a>|The provided sequence is not valid.|  | | <a name=\"751\">751</a>|The type of the Custom Entity is different than the type provided in the definition.|  | | <a name=\"752\">752</a>|Luminesce process returned an error.|  | | <a name=\"753\">753</a>|File name or content incompatible with operation.|  | | <a name=\"755\">755</a>|Schema of response from Drive is not as expected.|  | | <a name=\"757\">757</a>|Schema of response from Luminesce is not as expected.|  | | <a name=\"758\">758</a>|Luminesce timed out.|  | | <a name=\"763\">763</a>|Invalid Lusid Entity Identifier Unit|  | | <a name=\"768\">768</a>|Fee rule not found.|  | | <a name=\"769\">769</a>|Cannot update the base currency of a portfolio with transactions loaded|  | | <a name=\"771\">771</a>|Transaction configuration source not found|  | | <a name=\"774\">774</a>|Compliance rule not found.|  | | <a name=\"775\">775</a>|Fund accounting document cannot be processed.|  | | <a name=\"778\">778</a>|Unable to look up FX rate from trade ccy to portfolio ccy for some of the trades.|  | | <a name=\"782\">782</a>|The Property definition dataType is not matching the derivation formula dataType|  | | <a name=\"783\">783</a>|The Property definition domain is not supported for derived properties|  | | <a name=\"788\">788</a>|Compliance run not found failure.|  | | <a name=\"790\">790</a>|Custom Entity has missing or invalid identifiers|  | | <a name=\"791\">791</a>|Custom Entity definition already exists|  | | <a name=\"792\">792</a>|Compliance PropertyKey is missing.|  | | <a name=\"793\">793</a>|Compliance Criteria Value for matching is missing.|  | | <a name=\"795\">795</a>|Cannot delete identifier definition|  | | <a name=\"796\">796</a>|Tax rule set not found.|  | | <a name=\"797\">797</a>|A tax rule set with this id already exists.|  | | <a name=\"798\">798</a>|Multiple rule sets for the same property key are applicable.|  | | <a name=\"799\">799</a>|The request must contain a date or diary entry.|  | | <a name=\"800\">800</a>|Can not upsert an instrument event of this type.|  | | <a name=\"801\">801</a>|The instrument event does not exist.|  | | <a name=\"802\">802</a>|The Instrument event is missing salient information.|  | | <a name=\"803\">803</a>|The Instrument event could not be processed.|  | | <a name=\"804\">804</a>|Some data requested does not follow the order graph assumptions.|  | | <a name=\"805\">805</a>|The instrument event type does not exist.|  | | <a name=\"806\">806</a>|The transaction template specification does not exist.|  | | <a name=\"807\">807</a>|The default transaction template does not exist.|  | | <a name=\"808\">808</a>|The transaction template does not exist.|  | | <a name=\"811\">811</a>|A price could not be found for an order.|  | | <a name=\"812\">812</a>|A price could not be found for an allocation.|  | | <a name=\"813\">813</a>|Chart of Accounts not found.|  | | <a name=\"814\">814</a>|Account not found.|  | | <a name=\"815\">815</a>|Abor not found.|  | | <a name=\"816\">816</a>|Abor Configuration not found.|  | | <a name=\"817\">817</a>|Reconciliation mapping not found|  | | <a name=\"818\">818</a>|Attribute type could not be deleted because it doesn\'t exist.|  | | <a name=\"819\">819</a>|Reconciliation not found.|  | | <a name=\"820\">820</a>|Custodian Account not found.|  | | <a name=\"821\">821</a>|Allocation Failure|  | | <a name=\"822\">822</a>|Reconciliation run not found|  | | <a name=\"823\">823</a>|Reconciliation break not found|  | | <a name=\"824\">824</a>|Entity link type could not be deleted because it doesn\'t exist.|  | | <a name=\"828\">828</a>|Address key definition not found.|  | | <a name=\"829\">829</a>|Compliance template not found.|  | | <a name=\"830\">830</a>|Action not supported|  | | <a name=\"831\">831</a>|Reference list not found.|  | | <a name=\"832\">832</a>|Posting Module not found.|  | | <a name=\"833\">833</a>|The type of parameter provided did not match that required by the compliance rule.|  | | <a name=\"834\">834</a>|The parameters provided by a rule did not match those required by its template.|  | | <a name=\"835\">835</a>|The entity has a property in a domain that is not supprted for that entity type.|  | | <a name=\"836\">836</a>|Structured result data not found.|  | | <a name=\"837\">837</a>|Diary entry not found.|  | | <a name=\"838\">838</a>|Diary entry could not be created.|  | | <a name=\"839\">839</a>|Diary entry already exists.|  | | <a name=\"861\">861</a>|Compliance run summary not found.|  | | <a name=\"869\">869</a>|Conflicting instrument properties in batch.|  | | <a name=\"870\">870</a>|Compliance run summary already exists.|  | | <a name=\"871\">871</a>|The specified impersonated user does not exist|  | | <a name=\"874\">874</a>|Provided Property Domain is not supported for entity filter.|  | | <a name=\"875\">875</a>|Cannot Delete System Reference List.|  | | <a name=\"876\">876</a>|Cleardown Module not found.|  | | <a name=\"879\">879</a>|Portfolios do not have the same base currency|  | | <a name=\"880\">880</a>|There was a problem with the definition of the compliance expression.|  | | <a name=\"881\">881</a>|Block overplaced.|  | | <a name=\"882\">882</a>|Order not approved.|  | | <a name=\"883\">883</a>|Cannot update the shared fields of a block with associated orders.|  | | <a name=\"886\">886</a>|Cannot lock the period.|  | | <a name=\"887\">887</a>|Cannot apply clear down module.|  | | <a name=\"888\">888</a>|Cannot upsert Instrument Event Instruction.|  | | <a name=\"889\">889</a>|Cannot read Instrument Event Instruction.|  | | <a name=\"895\">895</a>|The Capital Ratio Calculation Is Wrong.|  | | <a name=\"910\">910</a>|Cannot update a block referenced by a placement.|  | | <a name=\"911\">911</a>|A Fund that references this Abor already exists.|  | | <a name=\"912\">912</a>|Cannot add decision to Staged Modification.|  | | <a name=\"913\">913</a>|The Staged Modification could not be applied.|  | | <a name=\"914\">914</a>|Action cannot be executed.|  | | <a name=\"915\">915</a>|Cannot upsert multiple versions of the same property in one request.|  | | <a name=\"916\">916</a>|Placement and direct descendents have more executed quantity than total placement quantity.|  | | <a name=\"917\">917</a>|Cannot update a placement with this EntryType.|  | | <a name=\"918\">918</a>|Cannot update a placement in this State.|  | | <a name=\"919\">919</a>|Placement could not be cancelled.|  | | <a name=\"920\">920</a>|Share Class not configured in Fund|  | | <a name=\"921\">921</a>|Share Class Sub Holding Key not configured in Portfolio|  | | <a name=\"922\">922</a>|Could not update an order.|  | | <a name=\"923\">923</a>|Multiple sets of Share Class Sub Holding Keys configured across the Portfolios of a Fund.|  | | <a name=\"924\">924</a>|One or more matrix cells could not be added to the matrix.|  | | <a name=\"925\">925</a>|There was a problem with the provided matrix definition.|  | | <a name=\"926\">926</a>|Matrix definition does not exist.|  | | <a name=\"927\">927</a>|Matrix definition could not be deleted because it doesn\'t exist.|  | | <a name=\"928\">928</a>|DataType with Id already exists.|  | | <a name=\"929\">929</a>|Square matrix is incomplete.|  | | <a name=\"930\">930</a>|A conditional license term has been exceeded.|  | | <a name=\"931\">931</a>|The Custom Data Model requested is not intended for the entity provided.|  | | <a name=\"932\">932</a>|The entity provided does not have a mandatory property specified by the Custom Data Model.|  | | <a name=\"933\">933</a>|The entity provided has a property not allowed by the specified Custom Data Model.|  | | <a name=\"934\">934</a>|The entity provided does not have a mandatory identifier specified by the Custom Data Model.|  | | <a name=\"935\">935</a>|The entity provided has an identifier not allowed by the specified Custom Data Model.|  | | <a name=\"936\">936</a>|The Custom Data Model included an alias or sort-by attribute that was not on the definition.|  | | <a name=\"937\">937</a>|The ClosedPeriod with the Id already exists on the Timeline|  | | <a name=\"938\">938</a>|The new Closed Period would cause the Timeline to have non-contiguous Closed Periods|  | | <a name=\"939\">939</a>|Blocked by a Network Zone|  | | <a name=\"940\">940</a>|The entity provided does not meet the conditions of the Custom Data Model.|  | | <a name=\"941\">941</a>|Order not compliant.|  | | <a name=\"942\">942</a>|Action would create a circular dependency.|  | | <a name=\"944\">944</a>|Derived Property calculation not complete.|  | | <a name=\"945\">945</a>|Derived Property is not filterable.|  | | <a name=\"946\">946</a>|The conditions provided have one or more errors.|  | | <a name=\"947\">947</a>|The property/identifier domain and entity domain do not match.|  | | <a name=\"948\">948</a>|Invalid Timeline|  | | <a name=\"949\">949</a>|Filterable Derived Property limit reached.|  | | <a name=\"950\">950</a>|Investor Record Identifier Already In Use|  | | <a name=\"951\">951</a>|Investor Record Not Found|  | | <a name=\"952\">952</a>|Investment Account Identifier Already In Use|  | | <a name=\"953\">953</a>|Investment Account Not Found|  | | <a name=\"954\">954</a>|Could Not Sweep Block|  | | <a name=\"955\">955</a>|Entity Unique Id has the wrong format|  | | <a name=\"956\">956</a>|Post Close Activity is invalid|  | | <a name=\"957\">957</a>|The ClosedPeriod with the Id does not exist on the Timeline|  | | <a name=\"958\">958</a>|Invalid Settlement Instructions|  | | <a name=\"959\">959</a>|Order requires quantity.|  | | <a name=\"960\">960</a>|Invalid DataPoint Value Assignment|  | | <a name=\"961\">961</a>|Invalid Relational Dataset Field Definition|  | | <a name=\"962\">962</a>|Relational Dataset Definition Does Not Exist|  | | <a name=\"963\">963</a>|Timeline Bookmark Not In Open Period|  | | <a name=\"964\">964</a>|The Custom Data Model specified identifiers but the entity does not support identifiers|  | | <a name=\"965\">965</a>|The sort by provided has one or more errors|  | | <a name=\"966\">966</a>|Invalid Custom Data Model Definition|  | | <a name=\"967\">967</a>|Rule set does not exist on the Check Definition|  | | <a name=\"968\">968</a>|The Closed Period is invalid|  | | <a name=\"969\">969</a>|Cannot update a placement with this Stop Price.|  | | <a name=\"970\">970</a>|Cannot update a placement with this Limit Price.|  | | <a name=\"971\">971</a>|Cannot update a placement with the current Type.|  | | <a name=\"974\">974</a>|Cannot PlaceBlocks against an \'Unsolicited\' Block (block containing 0 Orders).|  | | <a name=\"975\">975</a>|No Portfolio Group Selected|  | | <a name=\"976\">976</a>|Ambiguous Scope|  | 
 *
 * The version of the OpenAPI document: 2.0.1611
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { AcceptEstimateValuationPointResponse } from '../model/acceptEstimateValuationPointResponse';
import { AllocationGroupDefinition } from '../model/allocationGroupDefinition';
import { CreateValuationPointRequest } from '../model/createValuationPointRequest';
import { DeletedEntityResponse } from '../model/deletedEntityResponse';
import { DiaryEntry } from '../model/diaryEntry';
import { Fee } from '../model/fee';
import { FeeProperties } from '../model/feeProperties';
import { FeeRequest } from '../model/feeRequest';
import { Fund } from '../model/fund';
import { FundCalendarEntry } from '../model/fundCalendarEntry';
import { FundDefinitionRequest } from '../model/fundDefinitionRequest';
import { FundProperties } from '../model/fundProperties';
import { FundRequest } from '../model/fundRequest';
import { FundValuationRequest } from '../model/fundValuationRequest';
import { ListAggregationResponse } from '../model/listAggregationResponse';
import { LusidProblemDetails } from '../model/lusidProblemDetails';
import { LusidValidationProblemDetails } from '../model/lusidValidationProblemDetails';
import { NavActivityAdjustment } from '../model/navActivityAdjustment';
import { NavActivityAdjustmentResponse } from '../model/navActivityAdjustmentResponse';
import { Operation } from '../model/operation';
import { PagedResourceListOfFee } from '../model/pagedResourceListOfFee';
import { PagedResourceListOfFund } from '../model/pagedResourceListOfFund';
import { PagedResourceListOfFundCalendarEntries } from '../model/pagedResourceListOfFundCalendarEntries';
import { PagedResourceListOfFundCalendarEntry } from '../model/pagedResourceListOfFundCalendarEntry';
import { PagedResourceListOfValuationPointInstrument } from '../model/pagedResourceListOfValuationPointInstrument';
import { PagedResourceListOfValuationPointOverview } from '../model/pagedResourceListOfValuationPointOverview';
import { Property } from '../model/property';
import { QueryFundCashStatementParameters } from '../model/queryFundCashStatementParameters';
import { ResourceListOfNavActivityAdjustmentResponse } from '../model/resourceListOfNavActivityAdjustmentResponse';
import { RevertValuationPointDataRequest } from '../model/revertValuationPointDataRequest';
import { SeriesDefinitionRequest } from '../model/seriesDefinitionRequest';
import { SetShareClassInstrumentsRequest } from '../model/setShareClassInstrumentsRequest';
import { SingleValuationPointQueryParameters } from '../model/singleValuationPointQueryParameters';
import { UpdateValuationPointRequest } from '../model/updateValuationPointRequest';
import { UpsertFundBookmarkRequest } from '../model/upsertFundBookmarkRequest';
import { UpsertValuationPointRequest } from '../model/upsertValuationPointRequest';
import { ValuationPoint } from '../model/valuationPoint';
import { ValuationPointDataQueryParameters } from '../model/valuationPointDataQueryParameters';
import { ValuationPointDataRequest } from '../model/valuationPointDataRequest';
import { ValuationPointDataResponse } from '../model/valuationPointDataResponse';
import { ValuationPointResourceListOfAccountedComplexMarketData } from '../model/valuationPointResourceListOfAccountedComplexMarketData';
import { ValuationPointResourceListOfAccountedQuote } from '../model/valuationPointResourceListOfAccountedQuote';
import { ValuationPointResourceListOfAccountedTransaction } from '../model/valuationPointResourceListOfAccountedTransaction';
import { ValuationPointResourceListOfFundCashStatementLocalCurrency } from '../model/valuationPointResourceListOfFundCashStatementLocalCurrency';
import { ValuationPointResourceListOfFundCashStatementRow } from '../model/valuationPointResourceListOfFundCashStatementRow';
import { ValuationPointResourceListOfFundJournalEntryLine } from '../model/valuationPointResourceListOfFundJournalEntryLine';
import { ValuationPointResourceListOfPnlJournalEntryLine } from '../model/valuationPointResourceListOfPnlJournalEntryLine';
import { ValuationPointResourceListOfTrialBalance } from '../model/valuationPointResourceListOfTrialBalance';
import { ValuationPointResourceListOfUnsettledTransaction } from '../model/valuationPointResourceListOfUnsettledTransaction';
import { VersionedResourceListOfFundA2BDataRecord } from '../model/versionedResourceListOfFundA2BDataRecord';
import { VersionedResourceListOfFundA2BMovementRecord } from '../model/versionedResourceListOfFundA2BMovementRecord';
import { VersionedResourceListOfHoldingContributor } from '../model/versionedResourceListOfHoldingContributor';
import { VersionedResourceListOfPortfolioHolding } from '../model/versionedResourceListOfPortfolioHolding';

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

export enum FundsApiApiKeys {
}

export class FundsApi {
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

    public setApiKey(key: FundsApiApiKeys, value: string) {
        (this.authentications as any)[FundsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Accepts the specified estimate Valuation Point.  Should the Valuation Point differ since the Valuation Point was last run, both Valuation Points will be returned and status will be marked as \'Candidate\',  otherwise it will be marked as \'Final\'.
     * @summary [EARLY ACCESS] AcceptEstimateValuationPoint: Accepts an Estimate Valuation Point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataRequest The valuationPointDataRequest which contains the Diary Entry code for the Estimate Valuation Point to move to Candidate or Final state.
     * @param navTypeCode When provided, accepts the Valuation Point of the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async acceptEstimateValuationPoint (scope: string, code: string, valuationPointDataRequest: ValuationPointDataRequest, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AcceptEstimateValuationPointResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/$acceptestimate'
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
            throw new Error('Required parameter scope was null or undefined when calling acceptEstimateValuationPoint.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling acceptEstimateValuationPoint.');
        }

        // verify required parameter 'valuationPointDataRequest' is not null or undefined
        if (valuationPointDataRequest === null || valuationPointDataRequest === undefined) {
            throw new Error('Required parameter valuationPointDataRequest was null or undefined when calling acceptEstimateValuationPoint.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataRequest, "ValuationPointDataRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: AcceptEstimateValuationPointResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "AcceptEstimateValuationPointResponse");
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
     * Add the given Allocation Group definitions to the Fund.
     * @summary [EARLY ACCESS] AddAllocationGroups: Add Allocation Groups to a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param allocationGroupDefinition The definitions of the Allocation Groups to add to the Fund.
     */
    public async addAllocationGroups (scope: string, code: string, allocationGroupDefinition: Array<AllocationGroupDefinition>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fund;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/allocationgroups'
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
            throw new Error('Required parameter scope was null or undefined when calling addAllocationGroups.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling addAllocationGroups.');
        }

        // verify required parameter 'allocationGroupDefinition' is not null or undefined
        if (allocationGroupDefinition === null || allocationGroupDefinition === undefined) {
            throw new Error('Required parameter allocationGroupDefinition was null or undefined when calling addAllocationGroups.');
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
            body: ObjectSerializer.serialize(allocationGroupDefinition, "Array<AllocationGroupDefinition>")
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
            return new Promise<{ response: http.IncomingMessage; body: Fund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fund");
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
     * Add the given Series definitions to the specified Share Classes of the Fund.
     * @summary [EARLY ACCESS] AddSeries: Add Series to a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param seriesDefinitionRequest The definitions of the Series to add.
     */
    public async addSeries (scope: string, code: string, seriesDefinitionRequest: Array<SeriesDefinitionRequest>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fund;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/series'
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
            throw new Error('Required parameter scope was null or undefined when calling addSeries.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling addSeries.');
        }

        // verify required parameter 'seriesDefinitionRequest' is not null or undefined
        if (seriesDefinitionRequest === null || seriesDefinitionRequest === undefined) {
            throw new Error('Required parameter seriesDefinitionRequest was null or undefined when calling addSeries.');
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
            body: ObjectSerializer.serialize(seriesDefinitionRequest, "Array<SeriesDefinitionRequest>")
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
            return new Promise<{ response: http.IncomingMessage; body: Fund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fund");
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
     * Create the given Fee.
     * @summary [EARLY ACCESS] CreateFee: Create a Fee.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param feeRequest The Fee to create.
     * @param navTypeCode When provided, creates the Fee against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async createFee (scope: string, code: string, feeRequest: FeeRequest, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fee;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/fees'
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
            throw new Error('Required parameter scope was null or undefined when calling createFee.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling createFee.');
        }

        // verify required parameter 'feeRequest' is not null or undefined
        if (feeRequest === null || feeRequest === undefined) {
            throw new Error('Required parameter feeRequest was null or undefined when calling createFee.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(feeRequest, "FeeRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Fee;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fee");
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
     * Create the given Fund.
     * @summary [EARLY ACCESS] CreateFund: Create a Fund.
     * @param scope The scope of the Fund.
     * @param fundRequest The definition of the Fund.
     */
    public async createFund (scope: string, fundRequest: FundRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fund;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}'
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
            throw new Error('Required parameter scope was null or undefined when calling createFund.');
        }

        // verify required parameter 'fundRequest' is not null or undefined
        if (fundRequest === null || fundRequest === undefined) {
            throw new Error('Required parameter fundRequest was null or undefined when calling createFund.');
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
            body: ObjectSerializer.serialize(fundRequest, "FundRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Fund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fund");
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
     * Create the given V2 Fund.
     * @summary [EARLY ACCESS] CreateFundV2: Create a Fund V2 (Preview).
     * @param scope The scope of the Fund.
     * @param fundDefinitionRequest The definition of the Fund.
     */
    public async createFundV2 (scope: string, fundDefinitionRequest: FundDefinitionRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fund;  }> {
        const localVarPath = this.basePath + '/api/funds/v2/{scope}'
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
            throw new Error('Required parameter scope was null or undefined when calling createFundV2.');
        }

        // verify required parameter 'fundDefinitionRequest' is not null or undefined
        if (fundDefinitionRequest === null || fundDefinitionRequest === undefined) {
            throw new Error('Required parameter fundDefinitionRequest was null or undefined when calling createFundV2.');
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
            body: ObjectSerializer.serialize(fundDefinitionRequest, "FundDefinitionRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Fund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fund");
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
     * Insert the estimate Valuation Point.
     * @summary [EARLY ACCESS] CreateValuationPoint: Create a Valuation Point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param createValuationPointRequest The Valuation Point Estimate definition to create.
     * @param navTypeCode When provided, creates the Valuation Point against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async createValuationPoint (scope: string, code: string, createValuationPointRequest: CreateValuationPointRequest, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPoint;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/$create'
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
            throw new Error('Required parameter scope was null or undefined when calling createValuationPoint.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling createValuationPoint.');
        }

        // verify required parameter 'createValuationPointRequest' is not null or undefined
        if (createValuationPointRequest === null || createValuationPointRequest === undefined) {
            throw new Error('Required parameter createValuationPointRequest was null or undefined when calling createValuationPoint.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(createValuationPointRequest, "CreateValuationPointRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPoint;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPoint");
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
     * Deactivate the given NAV types on the Fund.
     * @summary [EARLY ACCESS] DeactivateNavTypes: Deactivate NAV types on a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param requestBody The codes of the nav types to be deactivated.
     * @param deleteMode The delete mode to use. Default value: Soft. Available values: Soft, Hard.
     */
    public async deactivateNavTypes (scope: string, code: string, requestBody: Array<string>, deleteMode?: 'Soft' | 'Hard', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fund;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/deactivateNavTypes'
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
            throw new Error('Required parameter scope was null or undefined when calling deactivateNavTypes.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deactivateNavTypes.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling deactivateNavTypes.');
        }

        if (deleteMode !== undefined) {
            localVarQueryParameters['deleteMode'] = ObjectSerializer.serialize(deleteMode, "'Soft' | 'Hard'");
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
            return new Promise<{ response: http.IncomingMessage; body: Fund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fund");
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
     * Deletes the given Bookmark.
     * @summary [EARLY ACCESS] DeleteBookmark: Delete a Bookmark.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param bookmarkCode The bookmark code for the bookmark to be deleted.
     * @param navTypeCode When provided, deletes the Bookmark against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async deleteBookmark (scope: string, code: string, bookmarkCode: string, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/bookmarks/{bookmarkCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'bookmarkCode' + '}', encodeURIComponent(String(bookmarkCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling deleteBookmark.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteBookmark.');
        }

        // verify required parameter 'bookmarkCode' is not null or undefined
        if (bookmarkCode === null || bookmarkCode === undefined) {
            throw new Error('Required parameter bookmarkCode was null or undefined when calling deleteBookmark.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
     * Delete the given Fee.
     * @summary [EARLY ACCESS] DeleteFee: Delete a Fee.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param feeCode The code of the Fee to be deleted.
     */
    public async deleteFee (scope: string, code: string, feeCode: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/fees/{feeCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'feeCode' + '}', encodeURIComponent(String(feeCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling deleteFee.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteFee.');
        }

        // verify required parameter 'feeCode' is not null or undefined
        if (feeCode === null || feeCode === undefined) {
            throw new Error('Required parameter feeCode was null or undefined when calling deleteFee.');
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
     * Delete the given Fund.
     * @summary [EARLY ACCESS] DeleteFund: Delete a Fund.
     * @param scope The scope of the Fund to be deleted.
     * @param code The code of the Fund to be deleted. Together with the scope this uniquely identifies the Fund.
     */
    public async deleteFund (scope: string, code: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}'
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
            throw new Error('Required parameter scope was null or undefined when calling deleteFund.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteFund.');
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
     * Delete Nav activity adjustments on a Valuation Point.
     * @summary [EARLY ACCESS] DeleteNavActivityAdjustments: Delete Nav activity adjustments.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope is the unique identifier for the given Fund.
     * @param valuationPointCode The valuation point Code to delete the adjustment from
     * @param navActivityAdjustmentResponse The request describing the Nav activity adjustments to delete from a specific valuation point and nav type
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param valuationPointCodeVariant The variant of the valuation point used in the request. Together with the valuation point code marks the unique branch for the NavType.
     */
    public async deleteNavActivityAdjustments (scope: string, code: string, valuationPointCode: string, navActivityAdjustmentResponse: Array<NavActivityAdjustmentResponse>, navTypeCode?: string, valuationPointCodeVariant?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/navAdjustment/$delete'
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
            throw new Error('Required parameter scope was null or undefined when calling deleteNavActivityAdjustments.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteNavActivityAdjustments.');
        }

        // verify required parameter 'valuationPointCode' is not null or undefined
        if (valuationPointCode === null || valuationPointCode === undefined) {
            throw new Error('Required parameter valuationPointCode was null or undefined when calling deleteNavActivityAdjustments.');
        }

        // verify required parameter 'navActivityAdjustmentResponse' is not null or undefined
        if (navActivityAdjustmentResponse === null || navActivityAdjustmentResponse === undefined) {
            throw new Error('Required parameter navActivityAdjustmentResponse was null or undefined when calling deleteNavActivityAdjustments.');
        }

        if (valuationPointCode !== undefined) {
            localVarQueryParameters['valuationPointCode'] = ObjectSerializer.serialize(valuationPointCode, "string");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
        }

        if (valuationPointCodeVariant !== undefined) {
            localVarQueryParameters['valuationPointCodeVariant'] = ObjectSerializer.serialize(valuationPointCodeVariant, "string");
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
            body: ObjectSerializer.serialize(navActivityAdjustmentResponse, "Array<NavActivityAdjustmentResponse>")
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
     * Deletes the given Valuation Point.
     * @summary [EARLY ACCESS] DeleteValuationPoint: Delete a Valuation Point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param diaryEntryCode The diary entry code for the valuation Point to be deleted.
     * @param diaryEntryCodeVariant The variant of the valuation point used in the request. Together with the valuation point code marks the unique branch for the NavType. This is working only for the Estimates.
     * @param navTypeCode When provided, deletes the Valuation Point against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async deleteValuationPoint (scope: string, code: string, diaryEntryCode: string, diaryEntryCodeVariant?: string, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/{diaryEntryCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'diaryEntryCode' + '}', encodeURIComponent(String(diaryEntryCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling deleteValuationPoint.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteValuationPoint.');
        }

        // verify required parameter 'diaryEntryCode' is not null or undefined
        if (diaryEntryCode === null || diaryEntryCode === undefined) {
            throw new Error('Required parameter diaryEntryCode was null or undefined when calling deleteValuationPoint.');
        }

        if (diaryEntryCodeVariant !== undefined) {
            localVarQueryParameters['diaryEntryCodeVariant'] = ObjectSerializer.serialize(diaryEntryCodeVariant, "string");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
     * Moves a \'Candidate\' status Valuation Point to status \'Final\'.
     * @summary [EARLY ACCESS] FinaliseCandidateValuationPoint: Finalise a Candidate Valuation Point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataRequest The details of the Valuation Point to mark as final.
     * @param navTypeCode When provided, finalises the Valuation Point of the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async finaliseCandidateValuationPoint (scope: string, code: string, valuationPointDataRequest: ValuationPointDataRequest, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointDataResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/$finalisecandidate'
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
            throw new Error('Required parameter scope was null or undefined when calling finaliseCandidateValuationPoint.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling finaliseCandidateValuationPoint.');
        }

        // verify required parameter 'valuationPointDataRequest' is not null or undefined
        if (valuationPointDataRequest === null || valuationPointDataRequest === undefined) {
            throw new Error('Required parameter valuationPointDataRequest was null or undefined when calling finaliseCandidateValuationPoint.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataRequest, "ValuationPointDataRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointDataResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointDataResponse");
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
     * Get the A2B data for transaction portfolios in a specified Fund.
     * @summary [EARLY ACCESS] GetA2BDataForFund: Get A2B data for a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for querying the A2B data. This includes start and end dates.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param asAt The asAt datetime at which to resolve the fund and the timeline. Defaults              to return the latest version if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; domain to decorate onto              the A2B data. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot;.
     */
    public async getA2BDataForFund (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, navTypeCode?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfFundA2BDataRecord;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/a2b/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getA2BDataForFund.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getA2BDataForFund.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getA2BDataForFund.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfFundA2BDataRecord;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfFundA2BDataRecord");
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
     * Get the A2B movement records of transaction portfolios in a specified Fund.
     * @summary [EARLY ACCESS] GetA2BMovementsForFund: Get A2B movements for transaction portfolios in a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for querying the A2B movements. This includes start and end dates.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param asAt The asAt datetime at which to resolve the fund and the timeline. Defaults              to return the latest version if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; domain to decorate onto              the A2B movements. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot;.
     */
    public async getA2BMovementsForFund (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, navTypeCode?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfFundA2BMovementRecord;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/a2bmovements/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getA2BMovementsForFund.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getA2BMovementsForFund.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getA2BMovementsForFund.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfFundA2BMovementRecord;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfFundA2BMovementRecord");
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
     * Retrieve a fee for a specified Fund.
     * @summary [EARLY ACCESS] GetFee: Get a Fee for a specified Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param feeCode The code of the Fee.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the Fee properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the Fee. Defaults to returning the latest version of the Fee if not specified.
     * @param propertyKeys A list of property keys from the \&#39;Fee\&#39; domain to decorate onto the Fee.              These must take the format {domain}/{scope}/{code}, for example \&#39;Fee/Account/Id\&#39;. If no properties are specified, then no properties will be returned.
     */
    public async getFee (scope: string, code: string, feeCode: string, effectiveAt?: string, asAt?: Date, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fee;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/fees/{feeCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'feeCode' + '}', encodeURIComponent(String(feeCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling getFee.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getFee.');
        }

        // verify required parameter 'feeCode' is not null or undefined
        if (feeCode === null || feeCode === undefined) {
            throw new Error('Required parameter feeCode was null or undefined when calling getFee.');
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
            return new Promise<{ response: http.IncomingMessage; body: Fee;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fee");
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
     * Get all the properties of a single fee.
     * @summary [EARLY ACCESS] GetFeeProperties: Get Fee properties.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param feeCode The code of the Fee to get the properties for.
     * @param effectiveAt The effective datetime or cut label at which to list the Fee\&#39;s properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the Fee\&#39;s properties. Defaults to return the latest version of each property if not specified.
     */
    public async getFeeProperties (scope: string, code: string, feeCode: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FeeProperties;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/fees/{feeCode}/properties'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'feeCode' + '}', encodeURIComponent(String(feeCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling getFeeProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getFeeProperties.');
        }

        // verify required parameter 'feeCode' is not null or undefined
        if (feeCode === null || feeCode === undefined) {
            throw new Error('Required parameter feeCode was null or undefined when calling getFeeProperties.');
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
            return new Promise<{ response: http.IncomingMessage; body: FeeProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "FeeProperties");
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
     * Retrieve the definition of a particular Fund.
     * @summary [EARLY ACCESS] GetFund: Get a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the Fund properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the Fund definition. Defaults to returning the latest version of the Fund definition if not specified.
     * @param propertyKeys A list of property keys from the \&#39;Fund\&#39; domain to decorate onto the Fund.              These must take the format {domain}/{scope}/{code}, for example \&#39;Fund/Manager/Id\&#39;. If no properties are specified, then no properties will be returned.
     */
    public async getFund (scope: string, code: string, effectiveAt?: string, asAt?: Date, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fund;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}'
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
            throw new Error('Required parameter scope was null or undefined when calling getFund.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getFund.');
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
            return new Promise<{ response: http.IncomingMessage; body: Fund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fund");
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
     * Get all the properties of a single fund.
     * @summary [EARLY ACCESS] GetFundProperties: Get Fund properties.
     * @param scope The scope of the Fund to list the properties for.
     * @param code The code of the Fund to list the properties for. Together with the scope this uniquely identifies the Fund.
     * @param effectiveAt The effective datetime or cut label at which to list the Fund\&#39;s properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the Fund\&#39;s properties. Defaults to return the latest version of each property if not specified.
     */
    public async getFundProperties (scope: string, code: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FundProperties;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/properties'
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
            throw new Error('Required parameter scope was null or undefined when calling getFundProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getFundProperties.');
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
            return new Promise<{ response: http.IncomingMessage; body: FundProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "FundProperties");
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
     * Get the holdings of transaction portfolios in a specified Fund.
     * @summary [EARLY ACCESS] GetHoldingContributorsForFund: Get holdings contributors for transaction portfolios in a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param holdingId The unique holding identifier
     * @param valuationPointDataQueryParameters The arguments to use for querying the holdings.This can be a date, valuationPoint or a bookmark.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param includeHistoric If true, transactions from previously closed holdings are returned.              If false, only transactions from last time position is opened.
     * @param taxLotId Constrains the Holding Contributors to those which contributed to the specified tax lot.
     * @param includeUnsettledMovements If true, contributing transaction which have not settled yet will also be returned. False by default
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param asAt The asAt datetime at which to build the transactions. Defaults to return the latest              version of each transaction if not specified.
     * @param page The pagination token to use to continue listing transactions from a previous call to GetHoldingContributors.
     */
    public async getHoldingContributorsForFund (scope: string, code: string, holdingId: number, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, navTypeCode?: string, includeHistoric?: boolean, taxLotId?: string, includeUnsettledMovements?: boolean, limit?: number, asAt?: Date, page?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfHoldingContributor;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/holdings/{holdingId}/contributors'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'holdingId' + '}', encodeURIComponent(String(holdingId)));
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
            throw new Error('Required parameter scope was null or undefined when calling getHoldingContributorsForFund.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getHoldingContributorsForFund.');
        }

        // verify required parameter 'holdingId' is not null or undefined
        if (holdingId === null || holdingId === undefined) {
            throw new Error('Required parameter holdingId was null or undefined when calling getHoldingContributorsForFund.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getHoldingContributorsForFund.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
        }

        if (includeHistoric !== undefined) {
            localVarQueryParameters['includeHistoric'] = ObjectSerializer.serialize(includeHistoric, "boolean");
        }

        if (taxLotId !== undefined) {
            localVarQueryParameters['taxLotId'] = ObjectSerializer.serialize(taxLotId, "string");
        }

        if (includeUnsettledMovements !== undefined) {
            localVarQueryParameters['includeUnsettledMovements'] = ObjectSerializer.serialize(includeUnsettledMovements, "boolean");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfHoldingContributor;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfHoldingContributor");
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
     * Get the holdings of transaction portfolios in a specified Fund.
     * @summary [EARLY ACCESS] GetHoldingsForFund: Get holdings for transaction portfolios in a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param singleValuationPointQueryParameters The arguments to use for querying the holdings.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param asAt The asAt datetime at which to retrieve the holdings of transaction portfolios in the Fund. Defaults              to return the latest version of the holdings if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot;, \&quot;Holding\&quot; or \&quot;Portfolio\&quot;,\&quot;CustodianAccount\&quot; or \&quot;LegalEntity\&quot; domain to decorate onto domain to decorate onto              the holdings. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or \&quot;Holding/system/Cost\&quot;.
     * @param byTaxlots Whether to expand the holdings to return the underlying tax-lots. Defaults to False.
     * @param includeSettlementEventsAfterDays Number of days ahead to bring back settlements from, in relation to the specified effectiveAt.
     */
    public async getHoldingsForFund (scope: string, code: string, singleValuationPointQueryParameters: SingleValuationPointQueryParameters, navTypeCode?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, byTaxlots?: boolean, includeSettlementEventsAfterDays?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfPortfolioHolding;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/$holdings'
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
            throw new Error('Required parameter scope was null or undefined when calling getHoldingsForFund.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getHoldingsForFund.');
        }

        // verify required parameter 'singleValuationPointQueryParameters' is not null or undefined
        if (singleValuationPointQueryParameters === null || singleValuationPointQueryParameters === undefined) {
            throw new Error('Required parameter singleValuationPointQueryParameters was null or undefined when calling getHoldingsForFund.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(singleValuationPointQueryParameters, "SingleValuationPointQueryParameters")
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
     * Perform valuation on a specified Fund.
     * @summary [EARLY ACCESS] GetValuationForFund: Perform valuation for a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param fundValuationRequest The request specifying the dates (or DiaryEntry) on which to calculate a set of valuation metrics.
     */
    public async getValuationForFund (scope: string, code: string, navTypeCode?: string, fundValuationRequest?: FundValuationRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ListAggregationResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/$valuation'
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
            throw new Error('Required parameter scope was null or undefined when calling getValuationForFund.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getValuationForFund.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(fundValuationRequest, "FundValuationRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ListAggregationResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ListAggregationResponse");
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
     * Retrieves the Valuation Point data between given dates or Valuation Point codes.  The endpoint will internally extract all \'Assets\' and \'Liabilities\' from the Fund\'s Trial balance to produce a GAV.  Start date will be assumed from the last \'official\' ValuationPoint and EndDate will be as provided.
     * @summary [EARLY ACCESS] GetValuationPointData: Get Valuation Point Data for a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for querying the Valuation Point data.
     * @param asAt The asAt datetime at which to retrieve the Fund definition. Defaults to returning the latest version of the Fund definition if not specified.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async getValuationPointData (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, asAt?: Date, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointDataResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getValuationPointData.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getValuationPointData.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getValuationPointData.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointDataResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointDataResponse");
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
     * Gets the Journal Entry Lines for the given Valuation Point for a Fund.                The Journal Entry Lines have been generated from transactions, translated via posting rules and used in the valuation point.
     * @summary [EARLY ACCESS] GetValuationPointJournalEntryLines: Get the Journal Entry Lines for the given Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for querying the Journal Entry Lines.
     * @param generalLedgerProfileCode The optional code of a General Ledger Profile used to decorate Journal Entry Lines with levels.
     * @param asAt The asAt datetime at which to retrieve Journal Entry Lines. Defaults to returning the latest version if not specified.
     * @param filter Expression to filter the result set.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing Journal Entry Lines from a previous call to GetValuationPointJournalEntryLines.
     * @param propertyKeys A list of property keys from the \&#39;Instrument\&#39;, \&#39;Transaction\&#39;, \&#39;Portfolio\&#39;, \&#39;Account\&#39;, \&#39;LegalEntity\&#39; or \&#39;CustodianAccount\&#39;               domain to decorate onto the Journal Entry Lines.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async getValuationPointJournalEntryLines (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, generalLedgerProfileCode?: string, asAt?: Date, filter?: string, limit?: number, page?: string, propertyKeys?: Array<string>, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfFundJournalEntryLine;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/journalentrylines/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getValuationPointJournalEntryLines.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getValuationPointJournalEntryLines.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getValuationPointJournalEntryLines.');
        }

        if (generalLedgerProfileCode !== undefined) {
            localVarQueryParameters['generalLedgerProfileCode'] = ObjectSerializer.serialize(generalLedgerProfileCode, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfFundJournalEntryLine;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfFundJournalEntryLine");
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
     * Gets the PnL Summary lines from the Journal Entry Lines produced when calculating the Valuation Point.
     * @summary [EARLY ACCESS] GetValuationPointPnlSummary: Get a PnL summary for the given Valuation Point in the Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for generating the PnL summary.
     * @param generalLedgerProfileCode The optional code of a General Ledger Profile used to decorate Journal Entry Lines with levels.
     * @param asAt The asAt datetime at which to retrieve PnL summary. Defaults to returning the latest version              of each transaction if not specified.
     * @param filter \&quot;Expression to filter the result set.\&quot;
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing results from a previous call to GetValuationPointPnlSummary.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async getValuationPointPnlSummary (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, generalLedgerProfileCode?: string, asAt?: Date, filter?: string, limit?: number, page?: string, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfPnlJournalEntryLine;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/pnlsummary/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getValuationPointPnlSummary.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getValuationPointPnlSummary.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getValuationPointPnlSummary.');
        }

        if (generalLedgerProfileCode !== undefined) {
            localVarQueryParameters['generalLedgerProfileCode'] = ObjectSerializer.serialize(generalLedgerProfileCode, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfPnlJournalEntryLine;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfPnlJournalEntryLine");
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
     * Gets all quotes within the effective date range of the specified Valuation Point for a Fund,  including any quotes added via a Complex Close (Post-Close Activity).
     * @summary [EARLY ACCESS] GetValuationPointQuotes: Get the Quotes for the given Fund and Valuation Point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for querying the quotes.
     * @param asAt The asAt datetime at which to retrieve quotes. Defaults to returning the latest version              of each quote if not specified.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing quotes from a previous call to GetValuationPointQuotes.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async getValuationPointQuotes (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, asAt?: Date, limit?: number, page?: string, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfAccountedQuote;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/quotes/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getValuationPointQuotes.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getValuationPointQuotes.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getValuationPointQuotes.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfAccountedQuote;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfAccountedQuote");
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
     * Gets the Transactions for the given Valuation Point for a Fund.
     * @summary [EARLY ACCESS] GetValuationPointTransactions: Get the Transactions for the given Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for querying the transactions.
     * @param asAt The asAt datetime at which to retrieve transactions. Defaults to returning the latest version              of each transaction if not specified.
     * @param filter Expression to filter the result set.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing transactions from a previous call to GetValuationPointTransactions.
     * @param propertyKeys A list of property keys from the \&#39;Instrument\&#39;, \&#39;Transaction\&#39;, \&#39;Portfolio\&#39;, \&#39;Account\&#39;, \&#39;LegalEntity\&#39; or \&#39;CustodianAccount\&#39;              domain to decorate onto the transactions.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param dataModelScope The optional scope of a Custom Data Model to use
     * @param dataModelCode The optional code of a Custom Data Model to use
     * @param showCancelledTransactions Option to specify whether or not to include cancelled transactions,              including previous versions of transactions which have since been amended.              Defaults to False if not specified.
     * @param membershipType The membership types of the specified Custom Data Model to return. Default value: Member. Available values: All, Member, Candidate.
     */
    public async getValuationPointTransactions (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, asAt?: Date, filter?: string, limit?: number, page?: string, propertyKeys?: Array<string>, navTypeCode?: string, dataModelScope?: string, dataModelCode?: string, showCancelledTransactions?: boolean, membershipType?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfAccountedTransaction;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/transactions/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getValuationPointTransactions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getValuationPointTransactions.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getValuationPointTransactions.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
        }

        if (dataModelScope !== undefined) {
            localVarQueryParameters['dataModelScope'] = ObjectSerializer.serialize(dataModelScope, "string");
        }

        if (dataModelCode !== undefined) {
            localVarQueryParameters['dataModelCode'] = ObjectSerializer.serialize(dataModelCode, "string");
        }

        if (showCancelledTransactions !== undefined) {
            localVarQueryParameters['showCancelledTransactions'] = ObjectSerializer.serialize(showCancelledTransactions, "boolean");
        }

        if (membershipType !== undefined) {
            localVarQueryParameters['membershipType'] = ObjectSerializer.serialize(membershipType, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfAccountedTransaction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfAccountedTransaction");
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
     * Gets the Trial Balance for the given Valuation Point for a Fund.                The Trial Balance has been generated from transactions, translated via Posting Rules  and aggregated based on a General Ledger Profile (where specified).                Supplying the X-LUSID-SuppressImbalanceValidation header suppresses the imbalance check.  Any caller with access to this endpoint may use it; it is not role-restricted.
     * @summary [EARLY ACCESS] GetValuationPointTrialBalance: Get Trial Balance for the given Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for generating the Trial Balance.
     * @param generalLedgerProfileCode The optional code of a General Ledger Profile used to decorate Journal Entry Lines with levels.
     * @param asAt The asAt datetime at which to retrieve the Trial Balance.               Defaults to returning the latest version if not specified.
     * @param filter Expression to filter the results by.               For more information about filtering results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param limit When paginating, limit the number of returned results to this number.               Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing Trial Balances.               This token is returned from the previous call.               If a pagination token is provided, the filter, effectiveAt and asAt fields               must not have changed since the original request.
     * @param propertyKeys A list of property keys from the \&#39;Instrument\&#39;, \&#39;Transaction\&#39;, \&#39;Portfolio\&#39;, \&#39;Account\&#39;, \&#39;LegalEntity\&#39; or \&#39;CustodianAccount\&#39;               domain to decorate onto the TrialBalance.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param excludeCleardownModule If this is set to true, no Cleardown Module will be applied to the Trial Balance. Defaults to false.
     */
    public async getValuationPointTrialBalance (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, generalLedgerProfileCode?: string, asAt?: Date, filter?: string, limit?: number, page?: string, propertyKeys?: Array<string>, navTypeCode?: string, excludeCleardownModule?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfTrialBalance;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/trialbalance/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getValuationPointTrialBalance.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getValuationPointTrialBalance.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling getValuationPointTrialBalance.');
        }

        if (generalLedgerProfileCode !== undefined) {
            localVarQueryParameters['generalLedgerProfileCode'] = ObjectSerializer.serialize(generalLedgerProfileCode, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
        }

        if (excludeCleardownModule !== undefined) {
            localVarQueryParameters['excludeCleardownModule'] = ObjectSerializer.serialize(excludeCleardownModule, "boolean");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfTrialBalance;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfTrialBalance");
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
     * Gets all transactions that remain unsettled as at the specified Valuation Point for a Fund,  looking back from inception. Settlement status is point-in-time: post-cutoff settlement  activity does not alter the result.  The Valuation Point must be identified either by the date or diaryEntry query parameters or by the \'End\' parameter in the  request body; when both are supplied the query parameters are used.
     * @summary [EARLY ACCESS] GetValuationPointUnsettledTransactions: Get Unsettled Transactions for the given Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param asAt The asAt datetime at which to retrieve the report. Defaults to latest.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing from a previous call.
     * @param propertyKeys A list of property keys from the \&#39;Instrument\&#39;, \&#39;Transaction\&#39;, \&#39;Portfolio\&#39;, or \&#39;Account\&#39;              domain to decorate onto the transactions.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param date The optional date of the Valuation Point to report against, as an alternative to supplying              it in the request body. Must not be supplied together with diaryEntry.
     * @param diaryEntry The optional diary entry code of the Valuation Point to report against, as an              alternative to supplying it in the request body. Must not be supplied together with date.
     * @param valuationPointDataQueryParameters The optional arguments to use for querying the unsettled transactions. Can be              omitted when the Valuation Point is identified by the date or diaryEntry query parameters.
     */
    public async getValuationPointUnsettledTransactions (scope: string, code: string, asAt?: Date, limit?: number, page?: string, propertyKeys?: Array<string>, navTypeCode?: string, date?: string, diaryEntry?: string, valuationPointDataQueryParameters?: ValuationPointDataQueryParameters, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfUnsettledTransaction;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/unsettledtransactions/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling getValuationPointUnsettledTransactions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getValuationPointUnsettledTransactions.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
        }

        if (date !== undefined) {
            localVarQueryParameters['date'] = ObjectSerializer.serialize(date, "string");
        }

        if (diaryEntry !== undefined) {
            localVarQueryParameters['diaryEntry'] = ObjectSerializer.serialize(diaryEntry, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfUnsettledTransaction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfUnsettledTransaction");
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
     * List all the Fees matching a particular criteria.
     * @summary [EARLY ACCESS] ListFees: List Fees for a specified Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param effectiveAt The effective datetime or cut label at which to list the TimeVariant properties for the Fees. Defaults to the current LUSID              system datetime if not specified.
     * @param asAt The asAt datetime at which to list the Fees. Defaults to returning the latest version of each Fee if not specified.
     * @param page The pagination token to use to continue listing fees; this              value is returned from the previous call. If a pagination token is provided, the filter, effectiveAt              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results.              For example, to filter on the treatment, specify \&quot;treatment eq \&#39;Monthly\&#39;\&quot;. For more information about filtering              results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;
     * @param propertyKeys A list of property keys from the \&#39;Fee\&#39; domain to decorate onto each Fee.              These must take the format {domain}/{scope}/{code}, for example \&#39;Fee/Account/Id\&#39;.
     */
    public async listFees (scope: string, code: string, effectiveAt?: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfFee;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/fees'
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
            throw new Error('Required parameter scope was null or undefined when calling listFees.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listFees.');
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
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfFee;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfFee");
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
     * List all the Calendar Entries associated with the Fund.
     * @summary [EARLY ACCESS] ListFundCalendar: List Fund Calendar.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param asAt The asAt datetime at which to list the Calendar. Defaults to returning the latest version of each Calendar Entry if not specified.
     * @param page The pagination token to use to continue listing Calendar Entries; this              value is returned from the previous call. If a pagination token is provided, the filter, effectiveAt              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results. For more information about filtering              results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;.
     * @param propertyKeys A list of property keys from the \&#39;ClosedPeriod\&#39; domain to decorate onto each item.
     */
    public async listFundCalendar (scope: string, code: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfFundCalendarEntry;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/calendar'
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
            throw new Error('Required parameter scope was null or undefined when calling listFundCalendar.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listFundCalendar.');
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
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfFundCalendarEntry;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfFundCalendarEntry");
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
     * List all the Calendar Entries associated with the Fund.
     * @summary [EARLY ACCESS] ListFundCalendarEntries: List Fund Calendar Entries.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param asAt The asAt datetime at which to list the Calendar. Defaults to returning the latest version of each Calendar Entry if not specified.
     * @param page The pagination token to use to continue listing Calendar Entries; this              value is returned from the previous call. If a pagination token is provided, the filter, effectiveAt              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results. For more information about filtering              results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;.
     * @param propertyKeys A list of property keys from the \&#39;DiaryEntry\&#39; domain to decorate onto each item.
     */
    public async listFundCalendarEntries (scope: string, code: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfFundCalendarEntries;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/calendars'
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
            throw new Error('Required parameter scope was null or undefined when calling listFundCalendarEntries.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listFundCalendarEntries.');
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
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfFundCalendarEntries;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfFundCalendarEntries");
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
     * List all the Funds matching particular criteria.
     * @summary [EARLY ACCESS] ListFunds: List Funds.
     * @param effectiveAt The effective datetime or cut label at which to list the TimeVariant properties for the Funds. Defaults to the current LUSID              system datetime if not specified.
     * @param asAt The asAt datetime at which to list the Funds. Defaults to returning the latest version of each Fund if not specified.
     * @param page The pagination token to use to continue listing Funds; this              value is returned from the previous call. If a pagination token is provided, the filter, effectiveAt              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results.              For example, to filter on the Fund code, specify \&quot;id.Code eq \&#39;Fund1\&#39;\&quot;. For more information about filtering              results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;
     * @param propertyKeys A list of property keys from the \&#39;Fund\&#39; domain to decorate onto each Fund.              These must take the format {domain}/{scope}/{code}, for example \&#39;Fund/Manager/Id\&#39;.
     */
    public async listFunds (effectiveAt?: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfFund;  }> {
        const localVarPath = this.basePath + '/api/funds';
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

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
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
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfFund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfFund");
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
     * Lists the NAV adjustment activities applied to the specified valuation point for a Fund.
     * @summary [EARLY ACCESS] ListNavActivityAdjustments: List NAV adjustment activities applied to a valuation point
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope is the unique identifier for the given Fund.
     * @param valuationPointCode Fetch all NAV adjustment activities for this valuation point.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param asAt The asAt datetime at which to list the Nav activity adjustments. Defaults to returning the latest version of each adjustment if not specified.
     * @param page The pagination token to use to continue listing Nav activity adjustments; this              value is returned from the previous call. If a pagination token is provided, the filter,              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param valuationPointCodeVariant The variant of the valuation point used in the request. Together with the valuation point code marks the unique branch for the NavType.
     */
    public async listNavActivityAdjustments (scope: string, code: string, valuationPointCode: string, navTypeCode?: string, asAt?: Date, page?: string, limit?: number, filter?: string, valuationPointCodeVariant?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfNavActivityAdjustmentResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/navAdjustment'
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
            throw new Error('Required parameter scope was null or undefined when calling listNavActivityAdjustments.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listNavActivityAdjustments.');
        }

        // verify required parameter 'valuationPointCode' is not null or undefined
        if (valuationPointCode === null || valuationPointCode === undefined) {
            throw new Error('Required parameter valuationPointCode was null or undefined when calling listNavActivityAdjustments.');
        }

        if (valuationPointCode !== undefined) {
            localVarQueryParameters['valuationPointCode'] = ObjectSerializer.serialize(valuationPointCode, "string");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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

        if (valuationPointCodeVariant !== undefined) {
            localVarQueryParameters['valuationPointCodeVariant'] = ObjectSerializer.serialize(valuationPointCodeVariant, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfNavActivityAdjustmentResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfNavActivityAdjustmentResponse");
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
     * Lists all complex market data within the effective date range of the specified Valuation Point for a Fund,  including any items added via a Complex Close (Post-Close Activity).
     * @summary [EARLY ACCESS] ListValuationPointComplexMarketData: List the Complex Market Data for the given Fund and Valuation Point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param valuationPointDataQueryParameters The arguments to use for querying the complex market data.
     * @param asAt The asAt datetime at which to retrieve complex market data. Defaults to returning the latest version              of each item if not specified.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing complex market data from a previous call to ListValuationPointComplexMarketData.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async listValuationPointComplexMarketData (scope: string, code: string, valuationPointDataQueryParameters: ValuationPointDataQueryParameters, asAt?: Date, limit?: number, page?: string, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfAccountedComplexMarketData;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/complexmarketdata/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling listValuationPointComplexMarketData.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listValuationPointComplexMarketData.');
        }

        // verify required parameter 'valuationPointDataQueryParameters' is not null or undefined
        if (valuationPointDataQueryParameters === null || valuationPointDataQueryParameters === undefined) {
            throw new Error('Required parameter valuationPointDataQueryParameters was null or undefined when calling listValuationPointComplexMarketData.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(valuationPointDataQueryParameters, "ValuationPointDataQueryParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfAccountedComplexMarketData;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfAccountedComplexMarketData");
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
     * Lists the Instruments linked to Transactions within a Valuation Point for a Fund.
     * @summary [EARLY ACCESS] ListValuationPointInstruments: List Instruments inside a valuation point
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope is the unique identifier for the given Fund.
     * @param valuationPointCode Fetch all instruments for this valuation point.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param asAt The asAt datetime at which to list the instruments. Defaults to returning the latest version of each instrument if not specified.
     * @param page The pagination token to use to continue listing instruments; this              value is returned from the previous call. If a pagination token is provided, the filter,              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;.
     * @param instrumentPropertyKeys A list of property keys from the \&#39;Instrument\&#39; domain to decorate onto              instruments, or from any domain that supports relationships to decorate onto related entities.              These must have the format {domain}/{scope}/{code}, for example \&#39;Instrument/system/Name\&#39;.
     * @param valuationPointCodeVariant The variant of the valuation point used in the request. Together with the valuation point code marks the unique branch for the NavType.
     */
    public async listValuationPointInstruments (scope: string, code: string, valuationPointCode: string, navTypeCode?: string, asAt?: Date, page?: string, limit?: number, filter?: string, sortBy?: Array<string>, instrumentPropertyKeys?: Array<string>, valuationPointCodeVariant?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfValuationPointInstrument;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/instruments/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling listValuationPointInstruments.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listValuationPointInstruments.');
        }

        // verify required parameter 'valuationPointCode' is not null or undefined
        if (valuationPointCode === null || valuationPointCode === undefined) {
            throw new Error('Required parameter valuationPointCode was null or undefined when calling listValuationPointInstruments.');
        }

        if (valuationPointCode !== undefined) {
            localVarQueryParameters['valuationPointCode'] = ObjectSerializer.serialize(valuationPointCode, "string");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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

        if (instrumentPropertyKeys !== undefined) {
            localVarQueryParameters['instrumentPropertyKeys'] = ObjectSerializer.serialize(instrumentPropertyKeys, "Array<string>");
        }

        if (valuationPointCodeVariant !== undefined) {
            localVarQueryParameters['valuationPointCodeVariant'] = ObjectSerializer.serialize(valuationPointCodeVariant, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfValuationPointInstrument;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfValuationPointInstrument");
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
     * List the overview of all the Valuation Points that match the given criteria for a given Fund.
     * @summary [EARLY ACCESS] ListValuationPointOverview: List Valuation Points Overview for a given Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param effectiveAt The effective datetime or cut label at which to list the TimeVariant properties for the Valuation Points. Defaults to the current LUSID              system datetime if not specified.
     * @param asAt The asAt datetime at which to list the Valuation Points. Defaults to returning the latest version of each Valuation Point if not specified.
     * @param page The pagination token to use to continue listing Valuation Points; this              value is returned from the previous call. If a pagination token is provided, the filter, effectiveAt              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results by.              For example, to filter on the NAV, specify \&quot;NAV gt 300\&quot;. For more information about filtering              results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param propertyKeys A list of property keys from the \&#39;DiaryEntry\&#39; domain to decorate onto each ValuationPoint.              These must take the format {domain}/{scope}/{code}, for example \&#39;DiaryEntry/ValuationPoint/Id\&#39;.
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async listValuationPointOverview (scope: string, code: string, effectiveAt?: string, asAt?: Date, page?: string, limit?: number, filter?: string, propertyKeys?: Array<string>, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfValuationPointOverview;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationPointOverview'
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
            throw new Error('Required parameter scope was null or undefined when calling listValuationPointOverview.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listValuationPointOverview.');
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

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfValuationPointOverview;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfValuationPointOverview");
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
     * Create or update certain fields for a particular Fee.  The behaviour is defined by the JSON Patch specification.    Currently supported fields are: EndDate, ShareClasses.
     * @summary [EARLY ACCESS] PatchFee: Patch Fee.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param feeCode The code of the Fee.
     * @param operation The json patch document. For more information see: https://datatracker.ietf.org/doc/html/rfc6902.
     */
    public async patchFee (scope: string, code: string, feeCode: string, operation: Array<Operation>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fee;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/fees/{feeCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'feeCode' + '}', encodeURIComponent(String(feeCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling patchFee.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling patchFee.');
        }

        // verify required parameter 'feeCode' is not null or undefined
        if (feeCode === null || feeCode === undefined) {
            throw new Error('Required parameter feeCode was null or undefined when calling patchFee.');
        }

        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling patchFee.');
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
            return new Promise<{ response: http.IncomingMessage; body: Fee;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fee");
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
     * Update fields on a Fund.  The behaviour is defined by the JSON Patch specification.    Currently supported fields are: DisplayName, Description, BaseCurrency, PortfolioIds, FundConfigurationId, ShareClassInstruments, Type, InceptionDate, DecimalPlaces, PrimaryNavType, AdditionalNavTypes, AborId, YearEndDate.
     * @summary [EARLY ACCESS] PatchFund: Patch a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param operation The json patch document. For more information see: https://datatracker.ietf.org/doc/html/rfc6902.
     */
    public async patchFund (scope: string, code: string, operation: Array<Operation>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fund;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}'
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
            throw new Error('Required parameter scope was null or undefined when calling patchFund.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling patchFund.');
        }

        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling patchFund.');
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
            return new Promise<{ response: http.IncomingMessage; body: Fund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fund");
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
     * Deprecated: use QueryCashStatementLocalCurrency instead. Returns settled cash movements with  running balance, cost basis, average FX rate, and realised FX PnL for the specified Fund  valuation point period. The cash statement is derived from Journal Entry Lines filtered to  settled cash (HoldType=\'B\', SourceType=LusidTransaction). Use the DisplayMode parameter on the  request body to choose between ShowReversal (full reversal/TrueUp detail) and Consolidated  (collapses reversals into AvgRateCorrection rows).
     * @summary [DEPRECATED] QueryCashStatement: [DEPRECATED] QueryCashStatement: Query cash statement for a Fund valuation point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param queryFundCashStatementParameters The query parameters specifying the diary entry period and display mode.
     * @param asAt The asAt datetime at which to retrieve the cash statement. Defaults to the latest version if not specified.
     * @param filter Expression to filter the result set.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to get the next page of results.
     * @param propertyKeys A list of property keys to decorate onto the cash statement rows.
     * @param navTypeCode The code of the NAV type to use. Defaults to the primary NAV type if not specified.
     */
    public async queryCashStatement (scope: string, code: string, queryFundCashStatementParameters: QueryFundCashStatementParameters, asAt?: Date, filter?: string, limit?: number, page?: string, propertyKeys?: Array<string>, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfFundCashStatementRow;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/cashstatement/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling queryCashStatement.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling queryCashStatement.');
        }

        // verify required parameter 'queryFundCashStatementParameters' is not null or undefined
        if (queryFundCashStatementParameters === null || queryFundCashStatementParameters === undefined) {
            throw new Error('Required parameter queryFundCashStatementParameters was null or undefined when calling queryCashStatement.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(queryFundCashStatementParameters, "QueryFundCashStatementParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfFundCashStatementRow;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfFundCashStatementRow");
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
     * Returns settled cash movements with a running balance in local currency for the specified Fund  valuation point period. The cash statement is derived from Journal Entry Lines filtered to  settled cash (HoldType=\'B\', SourceType=LusidTransaction). Use the DisplayMode parameter on the  request body to choose between ShowReversal (full reversal/TrueUp detail) and Consolidated  (collapses system-generated zero-net reversal/TrueUp pairs into SystemCorrection rows). Base  currency columns are out of scope for this variant and are not returned.
     * @summary [EARLY ACCESS] QueryCashStatementLocalCurrency: [EXPERIMENTAL] QueryCashStatementLocalCurrency: Query the local-currency cash statement for a Fund valuation point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param queryFundCashStatementParameters The query parameters specifying the diary entry period and display mode.
     * @param asAt The asAt datetime at which to retrieve the cash statement. Defaults to the latest version if not specified.
     * @param filter Expression to filter the result set.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to get the next page of results.
     * @param propertyKeys A list of property keys to decorate onto the cash statement rows.
     * @param navTypeCode The code of the NAV type to use. Defaults to the primary NAV type if not specified.
     */
    public async queryCashStatementLocalCurrency (scope: string, code: string, queryFundCashStatementParameters: QueryFundCashStatementParameters, asAt?: Date, filter?: string, limit?: number, page?: string, propertyKeys?: Array<string>, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfFundCashStatementLocalCurrency;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/cashstatementlocalcurrency/$query'
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
            throw new Error('Required parameter scope was null or undefined when calling queryCashStatementLocalCurrency.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling queryCashStatementLocalCurrency.');
        }

        // verify required parameter 'queryFundCashStatementParameters' is not null or undefined
        if (queryFundCashStatementParameters === null || queryFundCashStatementParameters === undefined) {
            throw new Error('Required parameter queryFundCashStatementParameters was null or undefined when calling queryCashStatementLocalCurrency.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(queryFundCashStatementParameters, "QueryFundCashStatementParameters")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointResourceListOfFundCashStatementLocalCurrency;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointResourceListOfFundCashStatementLocalCurrency");
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
     * Moves a \'Final\' status Valuation Point to status \'Estimate\'.
     * @summary [EARLY ACCESS] RevertValuationPointToEstimate: Reverts a Final Valuation Point to Estimate.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param revertValuationPointDataRequest The revertValuationPointRequest which contains the Diary Entry code for the Final Valuation Point to move to Estimate status.
     * @param navTypeCode When provided, sets the status of the Valuation Point of the specified NAV Type to be Estimate.              Otherwise, the Primary NAV Type will be used.
     */
    public async revertValuationPointToEstimate (scope: string, code: string, revertValuationPointDataRequest: RevertValuationPointDataRequest, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPointDataResponse;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints/$reverttoestimate'
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
            throw new Error('Required parameter scope was null or undefined when calling revertValuationPointToEstimate.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling revertValuationPointToEstimate.');
        }

        // verify required parameter 'revertValuationPointDataRequest' is not null or undefined
        if (revertValuationPointDataRequest === null || revertValuationPointDataRequest === undefined) {
            throw new Error('Required parameter revertValuationPointDataRequest was null or undefined when calling revertValuationPointToEstimate.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(revertValuationPointDataRequest, "RevertValuationPointDataRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPointDataResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPointDataResponse");
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
     * Update the ShareClass Instruments on an existing Fund with the set of instruments provided.
     * @summary [EARLY ACCESS] SetShareClassInstruments: Set the ShareClass Instruments on a Fund.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param setShareClassInstrumentsRequest The scopes and instrument identifiers for the instruments to be set.
     */
    public async setShareClassInstruments (scope: string, code: string, setShareClassInstrumentsRequest: SetShareClassInstrumentsRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fund;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/shareclasses'
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
            throw new Error('Required parameter scope was null or undefined when calling setShareClassInstruments.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling setShareClassInstruments.');
        }

        // verify required parameter 'setShareClassInstrumentsRequest' is not null or undefined
        if (setShareClassInstrumentsRequest === null || setShareClassInstrumentsRequest === undefined) {
            throw new Error('Required parameter setShareClassInstrumentsRequest was null or undefined when calling setShareClassInstruments.');
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
            body: ObjectSerializer.serialize(setShareClassInstrumentsRequest, "SetShareClassInstrumentsRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Fund;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Fund");
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
     * Updates an existing Valuation Point.
     * @summary [EARLY ACCESS] UpdateValuationPoint: Update a Valuation Point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param updateValuationPointRequest The Valuation Point Estimate definition to upsert.
     * @param navTypeCode When provided, upserts the Valuation Point against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async updateValuationPoint (scope: string, code: string, updateValuationPointRequest: UpdateValuationPointRequest, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ValuationPoint;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints'
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
            throw new Error('Required parameter scope was null or undefined when calling updateValuationPoint.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling updateValuationPoint.');
        }

        // verify required parameter 'updateValuationPointRequest' is not null or undefined
        if (updateValuationPointRequest === null || updateValuationPointRequest === undefined) {
            throw new Error('Required parameter updateValuationPointRequest was null or undefined when calling updateValuationPoint.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(updateValuationPointRequest, "UpdateValuationPointRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ValuationPoint;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ValuationPoint");
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
     * This method will update or upsert a Bookmark for the Fund.
     * @summary [EARLY ACCESS] UpsertBookmark: Upsert a bookmark.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param upsertFundBookmarkRequest The bookmark definition to upsert.
     * @param navTypeCode When provided, upserts the Valuation Point against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async upsertBookmark (scope: string, code: string, upsertFundBookmarkRequest: UpsertFundBookmarkRequest, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FundCalendarEntry;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/bookmarks'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertBookmark.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertBookmark.');
        }

        // verify required parameter 'upsertFundBookmarkRequest' is not null or undefined
        if (upsertFundBookmarkRequest === null || upsertFundBookmarkRequest === undefined) {
            throw new Error('Required parameter upsertFundBookmarkRequest was null or undefined when calling upsertBookmark.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(upsertFundBookmarkRequest, "UpsertFundBookmarkRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: FundCalendarEntry;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "FundCalendarEntry");
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
     * Insert the estimate Valuation Point.                If the Valuation Point does not exist, this method will create it in estimate state.
     * @summary [EARLY ACCESS] UpsertDiaryEntryTypeValuationPoint: Upsert a Valuation Point.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param upsertValuationPointRequest The Valuation Point Estimate definition to upsert.
     * @param navTypeCode When provided, upserts the Valuation Point against the specified NAV Type, otherwise the Primary NAV Type will be used.
     */
    public async upsertDiaryEntryTypeValuationPoint (scope: string, code: string, upsertValuationPointRequest: UpsertValuationPointRequest, navTypeCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DiaryEntry;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/valuationpoints'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertDiaryEntryTypeValuationPoint.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertDiaryEntryTypeValuationPoint.');
        }

        // verify required parameter 'upsertValuationPointRequest' is not null or undefined
        if (upsertValuationPointRequest === null || upsertValuationPointRequest === undefined) {
            throw new Error('Required parameter upsertValuationPointRequest was null or undefined when calling upsertDiaryEntryTypeValuationPoint.');
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
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
            body: ObjectSerializer.serialize(upsertValuationPointRequest, "UpsertValuationPointRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: DiaryEntry;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DiaryEntry");
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
     * Update or insert one or more properties onto a single Fee. A property will be updated if it  already exists and inserted if it does not. All properties must be of the domain \'Fee\'.                Upserting a property that exists for an Fee, with a null value, will delete the instance of the property for that group.                Properties have an <i>effectiveFrom</i> datetime for which the property is valid, and an <i>effectiveUntil</i>  datetime until which the property is valid. Not supplying an <i>effectiveUntil</i> datetime results in the property being  valid indefinitely, or until the next <i>effectiveFrom</i> datetime of the property.
     * @summary [EARLY ACCESS] UpsertFeeProperties: Upsert Fee properties.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param feeCode The code of the Fee to update or insert the properties onto.
     * @param requestBody The properties to be updated or inserted onto the Fee. Each property in               the request must be keyed by its unique property key. This has the format {domain}/{scope}/{code} e.g. \&quot;Fee/Manager/Id\&quot;.
     */
    public async upsertFeeProperties (scope: string, code: string, feeCode: string, requestBody?: { [key: string]: Property; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FeeProperties;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/fees/{feeCode}/properties/$upsert'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'feeCode' + '}', encodeURIComponent(String(feeCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling upsertFeeProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertFeeProperties.');
        }

        // verify required parameter 'feeCode' is not null or undefined
        if (feeCode === null || feeCode === undefined) {
            throw new Error('Required parameter feeCode was null or undefined when calling upsertFeeProperties.');
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
            return new Promise<{ response: http.IncomingMessage; body: FeeProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "FeeProperties");
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
     * Update or insert one or more properties onto a single Fund. A property will be updated if it  already exists and inserted if it does not. All properties must be of the domain \'Fund\'.                Upserting a property that exists for an Fund, with a null value, will delete the instance of the property for that group.                Properties have an <i>effectiveFrom</i> datetime for which the property is valid, and an <i>effectiveUntil</i>  datetime until which the property is valid. Not supplying an <i>effectiveUntil</i> datetime results in the property being  valid indefinitely, or until the next <i>effectiveFrom</i> datetime of the property.
     * @summary [EARLY ACCESS] UpsertFundProperties: Upsert Fund properties.
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope this uniquely identifies the Fund.
     * @param requestBody The properties to be updated or inserted onto the Fund. Each property in               the request must be keyed by its unique property key. This has the format {domain}/{scope}/{code} e.g. \&quot;Fund/Manager/Id\&quot;.
     */
    public async upsertFundProperties (scope: string, code: string, requestBody?: { [key: string]: Property; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FundProperties;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/properties/$upsert'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertFundProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertFundProperties.');
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
            return new Promise<{ response: http.IncomingMessage; body: FundProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "FundProperties");
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
     * Upserts the NAV adjustment activities to the specified valuation point for a Fund.
     * @summary [EARLY ACCESS] UpsertNavActivityAdjustments: Upsert NAV adjustment activities to a valuation point
     * @param scope The scope of the Fund.
     * @param code The code of the Fund. Together with the scope is the unique identifier for the given Fund.
     * @param valuationPointCode The valuation point Code to apply the adjustment to
     * @param navActivityAdjustment The request describing the Nav activity adjustments to apply to a specific valuation point and nav type
     * @param navTypeCode When provided, runs against the specified NAV Type, otherwise the Primary NAV Type will be used.
     * @param valuationPointCodeVariant The variant of the valuation point used in the request. Together with the valuation point code marks the unique branch for the NavType.
     */
    public async upsertNavActivityAdjustments (scope: string, code: string, valuationPointCode: string, navActivityAdjustment: Array<NavActivityAdjustment>, navTypeCode?: string, valuationPointCodeVariant?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Date;  }> {
        const localVarPath = this.basePath + '/api/funds/{scope}/{code}/navAdjustment'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertNavActivityAdjustments.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertNavActivityAdjustments.');
        }

        // verify required parameter 'valuationPointCode' is not null or undefined
        if (valuationPointCode === null || valuationPointCode === undefined) {
            throw new Error('Required parameter valuationPointCode was null or undefined when calling upsertNavActivityAdjustments.');
        }

        // verify required parameter 'navActivityAdjustment' is not null or undefined
        if (navActivityAdjustment === null || navActivityAdjustment === undefined) {
            throw new Error('Required parameter navActivityAdjustment was null or undefined when calling upsertNavActivityAdjustments.');
        }

        if (valuationPointCode !== undefined) {
            localVarQueryParameters['valuationPointCode'] = ObjectSerializer.serialize(valuationPointCode, "string");
        }

        if (navTypeCode !== undefined) {
            localVarQueryParameters['navTypeCode'] = ObjectSerializer.serialize(navTypeCode, "string");
        }

        if (valuationPointCodeVariant !== undefined) {
            localVarQueryParameters['valuationPointCodeVariant'] = ObjectSerializer.serialize(valuationPointCodeVariant, "string");
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
            body: ObjectSerializer.serialize(navActivityAdjustment, "Array<NavActivityAdjustment>")
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
            return new Promise<{ response: http.IncomingMessage; body: Date;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Date");
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
