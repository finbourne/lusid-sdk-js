/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](../../../api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application   | Description                                                                       | API / Swagger Documentation                          | |---------------|-----------------------------------------------------------------------------------|------------------------------------------------------| | LUSID         | Open, API-first, developer-friendly investment data platform.                     | [Swagger](../../../api/swagger/index.html)           | | Web app       | User-facing front end for LUSID.                                                  | [Swagger](../../../app/swagger/index.html)           | | Scheduler     | Automated job scheduler.                                                          | [Swagger](../../../scheduler2/swagger/index.html)    | | Insights      | Monitoring and troubleshooting service.                                           | [Swagger](../../../insights/swagger/index.html)      | | Identity      | Identity management for LUSID (in conjunction with Access)                        | [Swagger](../../../identity/swagger/index.html)      | | Access        | Access control for LUSID (in conjunction with Identity)                           | [Swagger](../../../access/swagger/index.html)        | | Drive         | Secure file repository and manager for collaboration.                             | [Swagger](../../../drive/swagger/index.html)         | | Luminesce     | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](../../../honeycomb/swagger/index.html)     | | Notification  | Notification service.                                                             | [Swagger](../../../notification/swagger/index.html)  | | Configuration | File store for secrets and other sensitive information.                           | [Swagger](../../../configuration/swagger/index.html) | | Workflow      | Workflow service.                                                                 | [Swagger](../../../workflow/swagger/index.html)      |   # Error Codes  | Code|Name|Description | | ---|---|--- | | <a name=\"-10\">-10</a>|Server Configuration Error|  | | <a name=\"-1\">-1</a>|Unknown error|An unexpected error was encountered on our side. | | <a name=\"102\">102</a>|Version Not Found|  | | <a name=\"103\">103</a>|Api Rate Limit Violation|  | | <a name=\"104\">104</a>|Instrument Not Found|  | | <a name=\"105\">105</a>|Property Not Found|  | | <a name=\"106\">106</a>|Portfolio Recursion Depth|  | | <a name=\"108\">108</a>|Group Not Found|  | | <a name=\"109\">109</a>|Portfolio Not Found|  | | <a name=\"110\">110</a>|Property Schema Not Found|  | | <a name=\"111\">111</a>|Portfolio Ancestry Not Found|  | | <a name=\"112\">112</a>|Portfolio With Id Already Exists|  | | <a name=\"113\">113</a>|Orphaned Portfolio|  | | <a name=\"119\">119</a>|Missing Base Claims|  | | <a name=\"121\">121</a>|Property Not Defined|  | | <a name=\"122\">122</a>|Cannot Delete System Property|  | | <a name=\"123\">123</a>|Cannot Modify Immutable Property Field|  | | <a name=\"124\">124</a>|Property Already Exists|  | | <a name=\"125\">125</a>|Invalid Property Life Time|  | | <a name=\"126\">126</a>|Property Constraint Style Excludes Properties|  | | <a name=\"127\">127</a>|Cannot Modify Default Data Type|  | | <a name=\"128\">128</a>|Group Already Exists|  | | <a name=\"129\">129</a>|No Such Data Type|  | | <a name=\"130\">130</a>|Undefined Value For Data Type|  | | <a name=\"131\">131</a>|Unsupported Value Type Defined On Data Type|  | | <a name=\"132\">132</a>|Validation Error|  | | <a name=\"133\">133</a>|Loop Detected In Group Hierarchy|  | | <a name=\"134\">134</a>|Undefined Acceptable Values|  | | <a name=\"135\">135</a>|Sub Group Already Exists|  | | <a name=\"138\">138</a>|Price Source Not Found|  | | <a name=\"139\">139</a>|Analytic Store Not Found|  | | <a name=\"141\">141</a>|Analytic Store Already Exists|  | | <a name=\"143\">143</a>|Client Instrument Already Exists|  | | <a name=\"144\">144</a>|Duplicate In Parameter Set|  | | <a name=\"147\">147</a>|Results Not Found|  | | <a name=\"148\">148</a>|Order Field Not In Result Set|  | | <a name=\"149\">149</a>|Operation Failed|  | | <a name=\"150\">150</a>|Elastic Search Error|  | | <a name=\"151\">151</a>|Invalid Parameter Value|  | | <a name=\"153\">153</a>|Command Processing Failure|  | | <a name=\"154\">154</a>|Entity State Construction Failure|  | | <a name=\"155\">155</a>|Entity Timeline Does Not Exist|  | | <a name=\"156\">156</a>|Concurrency Conflict Failure|  | | <a name=\"157\">157</a>|Invalid Request|  | | <a name=\"158\">158</a>|Event Publish Unknown|  | | <a name=\"159\">159</a>|Event Query Failure|  | | <a name=\"160\">160</a>|Blob Did Not Exist|  | | <a name=\"162\">162</a>|Sub System Request Failure|  | | <a name=\"163\">163</a>|Sub System Configuration Failure|  | | <a name=\"165\">165</a>|Failed To Delete|  | | <a name=\"166\">166</a>|Upsert Client Instrument Failure|  | | <a name=\"167\">167</a>|Illegal As At Interval|  | | <a name=\"168\">168</a>|Illegal Bitemporal Query|  | | <a name=\"169\">169</a>|Invalid Alternate Id|  | | <a name=\"170\">170</a>|Cannot Add Non-Writable Properties To Entity|  | | <a name=\"171\">171</a>|Entity Already Exists In Group|  | | <a name=\"172\">172</a>|Entity With Id Does Not Exist|  | | <a name=\"173\">173</a>|Entity With Id Already Exists|  | | <a name=\"174\">174</a>|Derived Portfolio Details Do Not Exist|  | | <a name=\"175\">175</a>|Entity Not In Group|  | | <a name=\"176\">176</a>|Portfolio With Name Already Exists|  | | <a name=\"177\">177</a>|Invalid Transactions|  | | <a name=\"178\">178</a>|Reference Portfolio Not Found|  | | <a name=\"179\">179</a>|Duplicate Id|  | | <a name=\"180\">180</a>|Command Retrieval Failure|  | | <a name=\"181\">181</a>|Data Filter Application Failure|  | | <a name=\"182\">182</a>|Search Failed|  | | <a name=\"183\">183</a>|Movements Engine Configuration Key Failure|  | | <a name=\"184\">184</a>|Fx Rate Source Not Found|  | | <a name=\"185\">185</a>|Accrual Source Not Found|  | | <a name=\"186\">186</a>|Access Denied|  | | <a name=\"187\">187</a>|Invalid Identity Token|  | | <a name=\"188\">188</a>|Invalid Request Headers|  | | <a name=\"189\">189</a>|Price Not Found|  | | <a name=\"190\">190</a>|Invalid Sub Holding Keys Provided|  | | <a name=\"191\">191</a>|Duplicate Sub Holding Keys Provided|  | | <a name=\"192\">192</a>|Cut Definition Not Found|  | | <a name=\"193\">193</a>|Cut Definition Invalid|  | | <a name=\"194\">194</a>|Time Variant Property Deletion Date Unspecified|  | | <a name=\"195\">195</a>|Perpetual Property Deletion Date Specified|  | | <a name=\"196\">196</a>|Time Variant Property Upsert Date Unspecified|  | | <a name=\"197\">197</a>|Perpetual Property Upsert Date Specified|  | | <a name=\"200\">200</a>|Invalid Unit For Data Type|  | | <a name=\"201\">201</a>|Invalid Type For Data Type|  | | <a name=\"202\">202</a>|Invalid Value For Data Type|  | | <a name=\"203\">203</a>|Unit Not Defined For Data Type|  | | <a name=\"204\">204</a>|Units Not Supported On Data Type|  | | <a name=\"205\">205</a>|Cannot Specify Units On Data Type|  | | <a name=\"206\">206</a>|Unit Schema Inconsistent With Data Type|  | | <a name=\"207\">207</a>|Unit Definition Not Specified|  | | <a name=\"208\">208</a>|Duplicate Unit Definitions Specified|  | | <a name=\"209\">209</a>|Invalid Units Definition|  | | <a name=\"210\">210</a>|Invalid Instrument Identifier Unit|  | | <a name=\"211\">211</a>|Holdings Adjustment Does Not Exist|  | | <a name=\"212\">212</a>|Could Not Build Excel Url|  | | <a name=\"213\">213</a>|Could Not Get Excel Version|  | | <a name=\"214\">214</a>|Instrument By Code Not Found|  | | <a name=\"215\">215</a>|Entity Schema Does Not Exist|  | | <a name=\"216\">216</a>|Feature Not Supported On Portfolio Type|  | | <a name=\"217\">217</a>|Quote Not Found|  | | <a name=\"218\">218</a>|Invalid Quote Identifier|  | | <a name=\"219\">219</a>|Invalid Metric For Data Type|  | | <a name=\"220\">220</a>|Invalid Instrument Definition|  | | <a name=\"221\">221</a>|Instrument Upsert Failure|  | | <a name=\"222\">222</a>|Reference Portfolio Request Not Supported|  | | <a name=\"223\">223</a>|Transaction Portfolio Request Not Supported|  | | <a name=\"224\">224</a>|Invalid Property Value Assignment|  | | <a name=\"230\">230</a>|Transaction Type Not Found|  | | <a name=\"231\">231</a>|Transaction Type Duplication|  | | <a name=\"232\">232</a>|Portfolio Does Not Exist At Given Date|  | | <a name=\"233\">233</a>|Query Parser Failure|  | | <a name=\"234\">234</a>|Duplicate Constituent|  | | <a name=\"235\">235</a>|Unresolved Instrument Constituent|  | | <a name=\"236\">236</a>|Unresolved Instrument In Transition|  | | <a name=\"237\">237</a>|Missing Side Definitions|  | | <a name=\"240\">240</a>|Duplicate Calculations Failure|  | | <a name=\"299\">299</a>|Invalid Recipe|  | | <a name=\"300\">300</a>|Missing Recipe|  | | <a name=\"301\">301</a>|Dependencies|  | | <a name=\"304\">304</a>|Portfolio Preprocess Failure|  | | <a name=\"310\">310</a>|Valuation Engine Failure|  | | <a name=\"311\">311</a>|Task Factory Failure|  | | <a name=\"312\">312</a>|Task Evaluation Failure|  | | <a name=\"313\">313</a>|Task Generation Failure|  | | <a name=\"314\">314</a>|Engine Configuration Failure|  | | <a name=\"315\">315</a>|Model Specification Failure|  | | <a name=\"320\">320</a>|Market Data Key Failure|  | | <a name=\"321\">321</a>|Market Resolver Failure|  | | <a name=\"322\">322</a>|Market Data Failure|  | | <a name=\"330\">330</a>|Curve Failure|  | | <a name=\"331\">331</a>|Volatility Surface Failure|  | | <a name=\"332\">332</a>|Volatility Cube Failure|  | | <a name=\"350\">350</a>|Instrument Failure|  | | <a name=\"351\">351</a>|Cash Flows Failure|  | | <a name=\"352\">352</a>|Reference Data Failure|  | | <a name=\"360\">360</a>|Aggregation Failure|  | | <a name=\"361\">361</a>|Aggregation Measure Failure|  | | <a name=\"370\">370</a>|Result Retrieval Failure|  | | <a name=\"371\">371</a>|Result Processing Failure|  | | <a name=\"372\">372</a>|Vendor Result Processing Failure|  | | <a name=\"373\">373</a>|Vendor Result Mapping Failure|  | | <a name=\"374\">374</a>|Vendor Library Unauthorised|  | | <a name=\"375\">375</a>|Vendor Connectivity Error|  | | <a name=\"376\">376</a>|Vendor Interface Error|  | | <a name=\"377\">377</a>|Vendor Pricing Failure|  | | <a name=\"378\">378</a>|Vendor Translation Failure|  | | <a name=\"379\">379</a>|Vendor Key Mapping Failure|  | | <a name=\"380\">380</a>|Vendor Reflection Failure|  | | <a name=\"381\">381</a>|Vendor Process Failure|  | | <a name=\"382\">382</a>|Vendor System Failure|  | | <a name=\"390\">390</a>|Attempt To Upsert Duplicate Quotes|  | | <a name=\"391\">391</a>|Corporate Action Source Does Not Exist|  | | <a name=\"392\">392</a>|Corporate Action Source Already Exists|  | | <a name=\"393\">393</a>|Instrument Identifier Already In Use|  | | <a name=\"394\">394</a>|Properties Not Found|  | | <a name=\"395\">395</a>|Batch Operation Aborted|  | | <a name=\"400\">400</a>|Invalid Iso4217 Currency Code|  | | <a name=\"401\">401</a>|Cannot Assign Instrument Identifier To Currency|  | | <a name=\"402\">402</a>|Cannot Assign Currency Identifier To Non Currency|  | | <a name=\"403\">403</a>|Currency Instrument Cannot Be Deleted|  | | <a name=\"404\">404</a>|Currency Instrument Cannot Have Economic Definition|  | | <a name=\"405\">405</a>|Currency Instrument Cannot Have Lookthrough Portfolio|  | | <a name=\"406\">406</a>|Cannot Create Currency Instrument With Multiple Identifiers|  | | <a name=\"407\">407</a>|Specified Currency Is Undefined|  | | <a name=\"410\">410</a>|Index Does Not Exist|  | | <a name=\"411\">411</a>|Sort Field Does Not Exist|  | | <a name=\"413\">413</a>|Negative Pagination Parameters|  | | <a name=\"414\">414</a>|Invalid Search Syntax|  | | <a name=\"415\">415</a>|Filter Execution Timeout|  | | <a name=\"420\">420</a>|Side Definition Inconsistent|  | | <a name=\"450\">450</a>|Invalid Quote Access Metadata Rule|  | | <a name=\"451\">451</a>|Access Metadata Not Found|  | | <a name=\"452\">452</a>|Invalid Access Metadata Identifier|  | | <a name=\"460\">460</a>|Standard Resource Not Found|  | | <a name=\"461\">461</a>|Standard Resource Conflict|  | | <a name=\"462\">462</a>|Calendar Not Found|  | | <a name=\"463\">463</a>|Date In A Calendar Not Found|  | | <a name=\"464\">464</a>|Invalid Date Source Data|  | | <a name=\"465\">465</a>|Invalid Timezone|  | | <a name=\"601\">601</a>|Person Identifier Already In Use|  | | <a name=\"602\">602</a>|Person Not Found|  | | <a name=\"603\">603</a>|Cannot Set Identifier|  | | <a name=\"617\">617</a>|Invalid Recipe Specification In Request|  | | <a name=\"618\">618</a>|Inline Recipe Deserialisation Failure|  | | <a name=\"619\">619</a>|Identifier Types Not Set For Entity|  | | <a name=\"620\">620</a>|Cannot Delete All Client Defined Identifiers|  | | <a name=\"650\">650</a>|The Order requested was not found.|  | | <a name=\"654\">654</a>|The Allocation requested was not found.|  | | <a name=\"655\">655</a>|Cannot build the fx forward target with the given holdings.|  | | <a name=\"656\">656</a>|Group does not contain expected entities.|  | | <a name=\"665\">665</a>|Destination directory not found|  | | <a name=\"667\">667</a>|Relation definition already exists|  | | <a name=\"672\">672</a>|Could not retrieve file contents|  | | <a name=\"673\">673</a>|Missing entitlements for entities in Group|  | | <a name=\"674\">674</a>|Next Best Action not found|  | | <a name=\"676\">676</a>|Relation definition not defined|  | | <a name=\"677\">677</a>|Invalid entity identifier for relation|  | | <a name=\"681\">681</a>|Sorting by specified field not supported|One or more of the provided fields to order by were either invalid or not supported. | | <a name=\"682\">682</a>|Too many fields to sort by|The number of fields to sort the data by exceeds the number allowed by the endpoint | | <a name=\"684\">684</a>|Sequence Not Found|  | | <a name=\"685\">685</a>|Sequence Already Exists|  | | <a name=\"686\">686</a>|Non-cycling sequence has been exhausted|  | | <a name=\"687\">687</a>|Legal Entity Identifier Already In Use|  | | <a name=\"688\">688</a>|Legal Entity Not Found|  | | <a name=\"689\">689</a>|The supplied pagination token is invalid|  | | <a name=\"690\">690</a>|Property Type Is Not Supported|  | | <a name=\"691\">691</a>|Multiple Tax-lots For Currency Type Is Not Supported|  | | <a name=\"692\">692</a>|This endpoint does not support impersonation|  | | <a name=\"693\">693</a>|Entity type is not supported for Relationship|  | | <a name=\"694\">694</a>|Relationship Validation Failure|  | | <a name=\"695\">695</a>|Relationship Not Found|  | | <a name=\"697\">697</a>|Derived Property Formula No Longer Valid|  | | <a name=\"698\">698</a>|Story is not available|  | | <a name=\"703\">703</a>|Corporate Action Does Not Exist|  | | <a name=\"720\">720</a>|The provided sort and filter combination is not valid|  | | <a name=\"721\">721</a>|A2B generation failed|  | | <a name=\"722\">722</a>|Aggregated Return Calculation Failure|  | | <a name=\"723\">723</a>|Custom Entity Definition Identifier Already In Use|  | | <a name=\"724\">724</a>|Custom Entity Definition Not Found|  | | <a name=\"725\">725</a>|The Placement requested was not found.|  | | <a name=\"726\">726</a>|The Execution requested was not found.|  | | <a name=\"727\">727</a>|The Block requested was not found.|  | | <a name=\"728\">728</a>|The Participation requested was not found.|  | | <a name=\"729\">729</a>|The Package requested was not found.|  | | <a name=\"730\">730</a>|The OrderInstruction requested was not found.|  | | <a name=\"732\">732</a>|Custom Entity not found.|  | | <a name=\"733\">733</a>|Custom Entity Identifier already in use.|  | | <a name=\"735\">735</a>|Calculation Failed.|  | | <a name=\"736\">736</a>|An expected key on HttpResponse is missing.|  | | <a name=\"737\">737</a>|A required fee detail is missing.|  | | <a name=\"738\">738</a>|Zero rows were returned from Luminesce|  | | <a name=\"739\">739</a>|Provided Weekend Mask was invalid|  | | <a name=\"742\">742</a>|Custom Entity fields do not match the definition|  | | <a name=\"746\">746</a>|The provided sequence is not valid.|  | | <a name=\"751\">751</a>|The type of the Custom Entity is different than the type provided in the definition.|  | | <a name=\"752\">752</a>|Luminesce process returned an error.|  | | <a name=\"753\">753</a>|File name or content incompatible with operation.|  | | <a name=\"755\">755</a>|Schema of response from Drive is not as expected.|  | | <a name=\"757\">757</a>|Schema of response from Luminesce is not as expected.|  | | <a name=\"758\">758</a>|Luminesce timed out.|  | | <a name=\"763\">763</a>|Invalid Lusid Entity Identifier Unit|  | | <a name=\"768\">768</a>|Fee rule not found.|  | | <a name=\"769\">769</a>|Cannot update the base currency of a portfolio with transactions loaded|  | | <a name=\"771\">771</a>|Transaction configuration source not found|  | | <a name=\"774\">774</a>|Compliance rule not found.|  | | <a name=\"775\">775</a>|Fund accounting document cannot be processed.|  | | <a name=\"778\">778</a>|Unable to look up FX rate from trade ccy to portfolio ccy for some of the trades.|  | | <a name=\"782\">782</a>|The Property definition dataType is not matching the derivation formula dataType|  | | <a name=\"783\">783</a>|The Property definition domain is not supported for derived properties|  | | <a name=\"788\">788</a>|Compliance run not found failure.|  | | <a name=\"790\">790</a>|Custom Entity has missing or invalid identifiers|  | | <a name=\"791\">791</a>|Custom Entity definition already exists|  | | <a name=\"792\">792</a>|Compliance PropertyKey is missing.|  | | <a name=\"793\">793</a>|Compliance Criteria Value for matching is missing.|  | | <a name=\"795\">795</a>|Cannot delete identifier definition|  | | <a name=\"796\">796</a>|Tax rule set not found.|  | | <a name=\"797\">797</a>|A tax rule set with this id already exists.|  | | <a name=\"798\">798</a>|Multiple rule sets for the same property key are applicable.|  | | <a name=\"799\">799</a>|The request must contain a date or diary entry.|  | | <a name=\"800\">800</a>|Can not upsert an instrument event of this type.|  | | <a name=\"801\">801</a>|The instrument event does not exist.|  | | <a name=\"802\">802</a>|The Instrument event is missing salient information.|  | | <a name=\"803\">803</a>|The Instrument event could not be processed.|  | | <a name=\"804\">804</a>|Some data requested does not follow the order graph assumptions.|  | | <a name=\"805\">805</a>|The instrument event type does not exist.|  | | <a name=\"806\">806</a>|The transaction template specification does not exist.|  | | <a name=\"807\">807</a>|The default transaction template does not exist.|  | | <a name=\"808\">808</a>|The transaction template does not exist.|  | | <a name=\"811\">811</a>|A price could not be found for an order.|  | | <a name=\"812\">812</a>|A price could not be found for an allocation.|  | | <a name=\"813\">813</a>|Chart of Accounts not found.|  | | <a name=\"814\">814</a>|Account not found.|  | | <a name=\"815\">815</a>|Abor not found.|  | | <a name=\"816\">816</a>|Abor Configuration not found.|  | | <a name=\"817\">817</a>|Reconciliation mapping not found|  | | <a name=\"818\">818</a>|Attribute type could not be deleted because it doesn\'t exist.|  | | <a name=\"819\">819</a>|Reconciliation not found.|  | | <a name=\"820\">820</a>|Custodian Account not found.|  | | <a name=\"821\">821</a>|Allocation Failure|  | | <a name=\"822\">822</a>|Reconciliation run not found|  | | <a name=\"823\">823</a>|Reconciliation break not found|  | | <a name=\"824\">824</a>|Entity link type could not be deleted because it doesn\'t exist.|  | | <a name=\"828\">828</a>|Address key definition not found.|  | | <a name=\"829\">829</a>|Compliance template not found.|  | | <a name=\"830\">830</a>|Action not supported|  | | <a name=\"831\">831</a>|Reference list not found.|  | | <a name=\"832\">832</a>|Posting Module not found.|  | | <a name=\"833\">833</a>|The type of parameter provided did not match that required by the compliance rule.|  | | <a name=\"834\">834</a>|The parameters provided by a rule did not match those required by its template.|  | | <a name=\"835\">835</a>|The entity has a property in a domain that is not supprted for that entity type.|  | | <a name=\"836\">836</a>|Structured result data not found.|  | | <a name=\"837\">837</a>|Diary entry not found.|  | | <a name=\"838\">838</a>|Diary entry could not be created.|  | | <a name=\"839\">839</a>|Diary entry already exists.|  | | <a name=\"861\">861</a>|Compliance run summary not found.|  | | <a name=\"869\">869</a>|Conflicting instrument properties in batch.|  | | <a name=\"870\">870</a>|Compliance run summary already exists.|  | | <a name=\"871\">871</a>|The specified impersonated user does not exist|  | | <a name=\"874\">874</a>|Provided Property Domain is not supported for entity filter.|  | | <a name=\"875\">875</a>|Cannot Delete System Reference List.|  | | <a name=\"876\">876</a>|Cleardown Module not found.|  | | <a name=\"879\">879</a>|Portfolios do not have the same base currency|  | | <a name=\"880\">880</a>|There was a problem with the definition of the compliance expression.|  | | <a name=\"881\">881</a>|Block overplaced.|  | | <a name=\"882\">882</a>|Order not approved.|  | | <a name=\"883\">883</a>|Cannot update the shared fields of a block with associated orders.|  | | <a name=\"886\">886</a>|Cannot lock the period.|  | | <a name=\"887\">887</a>|Cannot apply clear down module.|  | | <a name=\"888\">888</a>|Cannot upsert Instrument Event Instruction.|  | | <a name=\"889\">889</a>|Cannot read Instrument Event Instruction.|  | | <a name=\"895\">895</a>|The Capital Ratio Calculation Is Wrong.|  | | <a name=\"910\">910</a>|Cannot update a block referenced by a placement.|  | | <a name=\"911\">911</a>|A Fund that references this Abor already exists.|  | | <a name=\"912\">912</a>|Cannot add decision to Staged Modification.|  | | <a name=\"913\">913</a>|The Staged Modification could not be applied.|  | | <a name=\"914\">914</a>|Action cannot be executed.|  | | <a name=\"915\">915</a>|Cannot upsert multiple versions of the same property in one request.|  | | <a name=\"916\">916</a>|Placement and direct descendents have more executed quantity than total placement quantity.|  | | <a name=\"917\">917</a>|Cannot update a placement with this EntryType.|  | | <a name=\"918\">918</a>|Cannot update a placement in this State.|  | | <a name=\"919\">919</a>|Placement could not be cancelled.|  | | <a name=\"920\">920</a>|Share Class not configured in Fund|  | | <a name=\"921\">921</a>|Share Class Sub Holding Key not configured in Portfolio|  | | <a name=\"922\">922</a>|Could not update an order.|  | | <a name=\"923\">923</a>|Multiple sets of Share Class Sub Holding Keys configured across the Portfolios of a Fund.|  | | <a name=\"924\">924</a>|One or more matrix cells could not be added to the matrix.|  | | <a name=\"925\">925</a>|There was a problem with the provided matrix definition.|  | | <a name=\"926\">926</a>|Matrix definition does not exist.|  | | <a name=\"927\">927</a>|Matrix definition could not be deleted because it doesn\'t exist.|  | | <a name=\"928\">928</a>|DataType with Id already exists.|  | | <a name=\"929\">929</a>|Square matrix is incomplete.|  | | <a name=\"930\">930</a>|A conditional license term has been exceeded.|  | | <a name=\"931\">931</a>|The Custom Data Model requested is not intended for the entity provided.|  | | <a name=\"932\">932</a>|The entity provided does not have a mandatory property specified by the Custom Data Model.|  | | <a name=\"933\">933</a>|The entity provided has a property not allowed by the specified Custom Data Model.|  | | <a name=\"934\">934</a>|The entity provided does not have a mandatory identifier specified by the Custom Data Model.|  | | <a name=\"935\">935</a>|The entity provided has an identifier not allowed by the specified Custom Data Model.|  | | <a name=\"936\">936</a>|The Custom Data Model included an alias or sort-by attribute that was not on the definition.|  | | <a name=\"937\">937</a>|The ClosedPeriod with the Id already exists on the Timeline|  | | <a name=\"938\">938</a>|The new Closed Period would cause the Timeline to have non-contiguous Closed Periods|  | | <a name=\"939\">939</a>|Blocked by a Network Zone|  | | <a name=\"940\">940</a>|The entity provided does not meet the conditions of the Custom Data Model.|  | | <a name=\"941\">941</a>|Order not compliant.|  | | <a name=\"942\">942</a>|Action would create a circular dependency.|  | | <a name=\"944\">944</a>|Derived Property calculation not complete.|  | | <a name=\"945\">945</a>|Derived Property is not filterable.|  | | <a name=\"946\">946</a>|The conditions provided have one or more errors.|  | | <a name=\"947\">947</a>|The property/identifier domain and entity domain do not match.|  | | <a name=\"948\">948</a>|Invalid Timeline|  | | <a name=\"949\">949</a>|Filterable Derived Property limit reached.|  | | <a name=\"950\">950</a>|Investor Record Identifier Already In Use|  | | <a name=\"951\">951</a>|Investor Record Not Found|  | | <a name=\"952\">952</a>|Investment Account Identifier Already In Use|  | | <a name=\"953\">953</a>|Investment Account Not Found|  | | <a name=\"954\">954</a>|Could Not Sweep Block|  | | <a name=\"955\">955</a>|Entity Unique Id has the wrong format|  | | <a name=\"956\">956</a>|Post Close Activity is invalid|  | | <a name=\"957\">957</a>|The ClosedPeriod with the Id does not exist on the Timeline|  | | <a name=\"958\">958</a>|Invalid Settlement Instructions|  | | <a name=\"959\">959</a>|Order requires quantity.|  | | <a name=\"960\">960</a>|Invalid DataPoint Value Assignment|  | | <a name=\"961\">961</a>|Invalid Relational Dataset Field Definition|  | | <a name=\"962\">962</a>|Relational Dataset Definition Does Not Exist|  | | <a name=\"963\">963</a>|Timeline Bookmark Not In Open Period|  | | <a name=\"964\">964</a>|The Custom Data Model specified identifiers but the entity does not support identifiers|  | | <a name=\"965\">965</a>|The sort by provided has one or more errors|  | | <a name=\"966\">966</a>|Invalid Custom Data Model Definition|  | | <a name=\"967\">967</a>|Rule set does not exist on the Check Definition|  | 
 *
 * The version of the OpenAPI document: 2.0.1333
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { AdjustHolding } from '../model/adjustHolding';
import { AdjustHoldingForDateRequest } from '../model/adjustHoldingForDateRequest';
import { AdjustHoldingRequest } from '../model/adjustHoldingRequest';
import { BatchAdjustHoldingsResponse } from '../model/batchAdjustHoldingsResponse';
import { BatchUpsertPortfolioTransactionsResponse } from '../model/batchUpsertPortfolioTransactionsResponse';
import { BatchUpsertTransactionSettlementInstructionResponse } from '../model/batchUpsertTransactionSettlementInstructionResponse';
import { BucketedCashFlowRequest } from '../model/bucketedCashFlowRequest';
import { BucketedCashFlowResponse } from '../model/bucketedCashFlowResponse';
import { CancelSingleHoldingAdjustmentRequest } from '../model/cancelSingleHoldingAdjustmentRequest';
import { CreatePortfolioDetails } from '../model/createPortfolioDetails';
import { CreateTradeTicketsResponse } from '../model/createTradeTicketsResponse';
import { CreateTransactionPortfolioRequest } from '../model/createTransactionPortfolioRequest';
import { CustodianAccount } from '../model/custodianAccount';
import { CustodianAccountProperties } from '../model/custodianAccountProperties';
import { CustodianAccountRequest } from '../model/custodianAccountRequest';
import { CustodianAccountsUpsertResponse } from '../model/custodianAccountsUpsertResponse';
import { DeleteCustodianAccountsResponse } from '../model/deleteCustodianAccountsResponse';
import { DeletedEntityResponse } from '../model/deletedEntityResponse';
import { HoldingIdsRequest } from '../model/holdingIdsRequest';
import { HoldingsAdjustment } from '../model/holdingsAdjustment';
import { LusidProblemDetails } from '../model/lusidProblemDetails';
import { LusidTradeTicket } from '../model/lusidTradeTicket';
import { LusidValidationProblemDetails } from '../model/lusidValidationProblemDetails';
import { Operation } from '../model/operation';
import { PagedResourceListOfCustodianAccount } from '../model/pagedResourceListOfCustodianAccount';
import { PerpetualProperty } from '../model/perpetualProperty';
import { Portfolio } from '../model/portfolio';
import { PortfolioDetails } from '../model/portfolioDetails';
import { Property } from '../model/property';
import { ResourceId } from '../model/resourceId';
import { ResourceListOfChangeHistory } from '../model/resourceListOfChangeHistory';
import { ResourceListOfHoldingsAdjustmentHeader } from '../model/resourceListOfHoldingsAdjustmentHeader';
import { ResourceListOfInstrumentCashFlow } from '../model/resourceListOfInstrumentCashFlow';
import { ResourceListOfOutputTransaction } from '../model/resourceListOfOutputTransaction';
import { ResourceListOfPortfolioCashFlow } from '../model/resourceListOfPortfolioCashFlow';
import { ResourceListOfPortfolioCashLadder } from '../model/resourceListOfPortfolioCashLadder';
import { ResourceListOfTransaction } from '../model/resourceListOfTransaction';
import { ResourceListOfTransactionSettlementInstruction } from '../model/resourceListOfTransactionSettlementInstruction';
import { SettlementInstructionQuery } from '../model/settlementInstructionQuery';
import { SettlementInstructionRequest } from '../model/settlementInstructionRequest';
import { TransactionQueryParameters } from '../model/transactionQueryParameters';
import { TransactionRequest } from '../model/transactionRequest';
import { TransactionSettlementStatus } from '../model/transactionSettlementStatus';
import { UpsertPortfolioTransactionsResponse } from '../model/upsertPortfolioTransactionsResponse';
import { UpsertTransactionPropertiesResponse } from '../model/upsertTransactionPropertiesResponse';
import { VersionedResourceListOfA2BDataRecord } from '../model/versionedResourceListOfA2BDataRecord';
import { VersionedResourceListOfA2BMovementRecord } from '../model/versionedResourceListOfA2BMovementRecord';
import { VersionedResourceListOfHoldingContributor } from '../model/versionedResourceListOfHoldingContributor';
import { VersionedResourceListOfOutputTransaction } from '../model/versionedResourceListOfOutputTransaction';
import { VersionedResourceListOfPortfolioHolding } from '../model/versionedResourceListOfPortfolioHolding';
import { VersionedResourceListOfTransaction } from '../model/versionedResourceListOfTransaction';
import { VersionedResourceListWithPostBodiesOfSettlementInstructionWithTransactionToSettlementInstructionQuery } from '../model/versionedResourceListWithPostBodiesOfSettlementInstructionWithTransactionToSettlementInstructionQuery';
import { VersionedResourceListWithWarningsOfPortfolioHolding } from '../model/versionedResourceListWithWarningsOfPortfolioHolding';

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

export enum TransactionPortfoliosApiApiKeys {
}

export class TransactionPortfoliosApi {
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

    public setApiKey(key: TransactionPortfoliosApiApiKeys, value: string) {
        (this.authentications as any)[TransactionPortfoliosApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Adjust one or more holdings of the specified transaction portfolio to the provided targets. LUSID will  automatically construct adjustment transactions to ensure that the holdings which have been adjusted are  always set to the provided targets for the specified effective datetime. Read more about the difference between  adjusting and setting holdings here https://support.lusid.com/docs/how-do-i-manually-adjust-or-set-holdings.
     * @summary AdjustHoldings: Adjust holdings
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param effectiveAt The effective datetime or cut label at which the holdings should be set to the provided targets.
     * @param adjustHoldingRequest The selected set of holdings to adjust to the provided targets for the              transaction portfolio.
     * @param reconciliationMethods Optional parameter for specifying a reconciliation method: e.g. FxForward.
     * @param overrideMovementName Optional parameter to override movement name for the set holdings.
     * @param overrideOffsetMovementName Optional parameter will create an additional offset movement for the set holdings with this new name and transaction type: CarryAsPnl
     */
    public async adjustHoldings (scope: string, code: string, effectiveAt: string, adjustHoldingRequest: Array<AdjustHoldingRequest>, reconciliationMethods?: Array<string>, overrideMovementName?: string, overrideOffsetMovementName?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AdjustHolding;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings'
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
            throw new Error('Required parameter scope was null or undefined when calling adjustHoldings.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling adjustHoldings.');
        }

        // verify required parameter 'effectiveAt' is not null or undefined
        if (effectiveAt === null || effectiveAt === undefined) {
            throw new Error('Required parameter effectiveAt was null or undefined when calling adjustHoldings.');
        }

        // verify required parameter 'adjustHoldingRequest' is not null or undefined
        if (adjustHoldingRequest === null || adjustHoldingRequest === undefined) {
            throw new Error('Required parameter adjustHoldingRequest was null or undefined when calling adjustHoldings.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (reconciliationMethods !== undefined) {
            localVarQueryParameters['reconciliationMethods'] = ObjectSerializer.serialize(reconciliationMethods, "Array<string>");
        }

        if (overrideMovementName !== undefined) {
            localVarQueryParameters['overrideMovementName'] = ObjectSerializer.serialize(overrideMovementName, "string");
        }

        if (overrideOffsetMovementName !== undefined) {
            localVarQueryParameters['overrideOffsetMovementName'] = ObjectSerializer.serialize(overrideOffsetMovementName, "string");
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
            body: ObjectSerializer.serialize(adjustHoldingRequest, "Array<AdjustHoldingRequest>")
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
            return new Promise<{ response: http.IncomingMessage; body: AdjustHolding;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "AdjustHolding");
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
     * Adjust one or more holdings of the specified transaction portfolio to the provided targets. LUSID will  automatically construct adjustment transactions to ensure that the holdings which have been adjusted are  always set to the provided targets for the specified effective datetime in each request.                Each request must be keyed by a unique correlation id. This id is ephemeral and is not stored by LUSID.  It serves only as a way to easily identify each adjustment in the response.    Note: If using partial failure modes, then it is important to check the response body for failures as any failures will still return a 200 status code
     * @summary BatchAdjustHoldings: Batch adjust holdings
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies               the transaction portfolio.
     * @param successMode Whether the batch request should fail Atomically or in a Partial fashion - Allowed Values: Atomic, Partial
     * @param requestBody The selected set of holdings to adjust to the provided targets for the               transaction portfolio.
     * @param reconciliationMethods Optional parameter for specifying a reconciliation method: e.g. FxForward.
     */
    public async batchAdjustHoldings (scope: string, code: string, successMode: string, requestBody: { [key: string]: AdjustHoldingForDateRequest; }, reconciliationMethods?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchAdjustHoldingsResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings/$batchAdjust'
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
            throw new Error('Required parameter scope was null or undefined when calling batchAdjustHoldings.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling batchAdjustHoldings.');
        }

        // verify required parameter 'successMode' is not null or undefined
        if (successMode === null || successMode === undefined) {
            throw new Error('Required parameter successMode was null or undefined when calling batchAdjustHoldings.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling batchAdjustHoldings.');
        }

        if (successMode !== undefined) {
            localVarQueryParameters['successMode'] = ObjectSerializer.serialize(successMode, "string");
        }

        if (reconciliationMethods !== undefined) {
            localVarQueryParameters['reconciliationMethods'] = ObjectSerializer.serialize(reconciliationMethods, "Array<string>");
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: AdjustHoldingForDateRequest; }")
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
            return new Promise<{ response: http.IncomingMessage; body: BatchAdjustHoldingsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "BatchAdjustHoldingsResponse");
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
     * Batch create trade tickets. Each ticket is broadly equivalent to a singular call to upsert an instrument, then a counterparty and finally  a transaction that makes use of the two.
     * @summary BatchCreateTradeTickets: Batch Create Trade Tickets
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param lusidTradeTicket the trade tickets to create
     */
    public async batchCreateTradeTickets (scope: string, code: string, lusidTradeTicket: Array<LusidTradeTicket>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateTradeTicketsResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/$batchtradetickets'
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
            throw new Error('Required parameter scope was null or undefined when calling batchCreateTradeTickets.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling batchCreateTradeTickets.');
        }

        // verify required parameter 'lusidTradeTicket' is not null or undefined
        if (lusidTradeTicket === null || lusidTradeTicket === undefined) {
            throw new Error('Required parameter lusidTradeTicket was null or undefined when calling batchCreateTradeTickets.');
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
            body: ObjectSerializer.serialize(lusidTradeTicket, "Array<LusidTradeTicket>")
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
            return new Promise<{ response: http.IncomingMessage; body: CreateTradeTicketsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CreateTradeTicketsResponse");
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
     * Set the holdings of the specified transaction portfolio to the provided targets. LUSID will automatically  construct adjustment transactions to ensure that the entire set of holdings for the transaction portfolio  are always set to the provided targets for the specified effective datetime. Read more about the difference between  adjusting and setting holdings here https://support.lusid.com/docs/how-do-i-manually-adjust-or-set-holdings.                Each request must be keyed by a unique correlation id. This id is ephemeral and is not stored by LUSID.  It serves only as a way to easily identify each adjustment in the response.    Note: If using partial failure modes, then it is important to check the response body for failures as any failures will still return a 200 status code
     * @summary BatchSetHoldings: Batch set holdings
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies               the transaction portfolio.
     * @param successMode Whether the batch request should fail Atomically or in a Partial fashion - Allowed Values: Atomic, Partial
     * @param requestBody The selected set of holdings to adjust to the provided targets for the               transaction portfolio.
     * @param reconciliationMethods Optional parameter for specifying a reconciliation method: e.g. FxForward.
     */
    public async batchSetHoldings (scope: string, code: string, successMode: string, requestBody: { [key: string]: AdjustHoldingForDateRequest; }, reconciliationMethods?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchAdjustHoldingsResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings/$batchSet'
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
            throw new Error('Required parameter scope was null or undefined when calling batchSetHoldings.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling batchSetHoldings.');
        }

        // verify required parameter 'successMode' is not null or undefined
        if (successMode === null || successMode === undefined) {
            throw new Error('Required parameter successMode was null or undefined when calling batchSetHoldings.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling batchSetHoldings.');
        }

        if (successMode !== undefined) {
            localVarQueryParameters['successMode'] = ObjectSerializer.serialize(successMode, "string");
        }

        if (reconciliationMethods !== undefined) {
            localVarQueryParameters['reconciliationMethods'] = ObjectSerializer.serialize(reconciliationMethods, "Array<string>");
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: AdjustHoldingForDateRequest; }")
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
            return new Promise<{ response: http.IncomingMessage; body: BatchAdjustHoldingsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "BatchAdjustHoldingsResponse");
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
     * Create or update instructions to settle specific transactions.
     * @summary [EARLY ACCESS] BatchUpsertSettlementInstructions: Batch Upsert Settlement Instructions.
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio.
     * @param requestBody The definition of the settlement instruction.
     */
    public async batchUpsertSettlementInstructions (scope: string, code: string, requestBody: { [key: string]: SettlementInstructionRequest; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchUpsertTransactionSettlementInstructionResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/settlementinstructions/$batchUpsert'
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
            throw new Error('Required parameter scope was null or undefined when calling batchUpsertSettlementInstructions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling batchUpsertSettlementInstructions.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling batchUpsertSettlementInstructions.');
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: SettlementInstructionRequest; }")
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
            return new Promise<{ response: http.IncomingMessage; body: BatchUpsertTransactionSettlementInstructionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "BatchUpsertTransactionSettlementInstructionResponse");
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
     * Create or update transactions in the transaction portfolio. A transaction will be updated  if it already exists and created if it does not.    Each request must be keyed by a unique correlation id. This id is ephemeral and is not stored by LUSID.  It serves only as a way to easily identify each transaction in the response.    Note: If using partial failure modes, then it is important to check the response body for failures as any failures will still return a 200 status code
     * @summary BatchUpsertTransactions: Batch upsert transactions
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param successMode Whether the batch request should fail Atomically or in a Partial fashion - Allowed Values: Atomic, Partial.
     * @param requestBody The payload describing the transactions to be created or updated.
     * @param preserveProperties If set to false, the entire property set will be overwritten by the provided properties. If not specified or set to true, only the properties provided will be updated.
     */
    public async batchUpsertTransactions (scope: string, code: string, successMode: string, requestBody: { [key: string]: TransactionRequest; }, preserveProperties?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchUpsertPortfolioTransactionsResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions/$batchUpsert'
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
            throw new Error('Required parameter scope was null or undefined when calling batchUpsertTransactions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling batchUpsertTransactions.');
        }

        // verify required parameter 'successMode' is not null or undefined
        if (successMode === null || successMode === undefined) {
            throw new Error('Required parameter successMode was null or undefined when calling batchUpsertTransactions.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling batchUpsertTransactions.');
        }

        if (successMode !== undefined) {
            localVarQueryParameters['successMode'] = ObjectSerializer.serialize(successMode, "string");
        }

        if (preserveProperties !== undefined) {
            localVarQueryParameters['preserveProperties'] = ObjectSerializer.serialize(preserveProperties, "boolean");
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: TransactionRequest; }")
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
            return new Promise<{ response: http.IncomingMessage; body: BatchUpsertPortfolioTransactionsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "BatchUpsertPortfolioTransactionsResponse");
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
     * Builds and returns all settlement instructions that have been loaded against this portfolio.
     * @summary [EARLY ACCESS] BuildSettlementInstructions: Build Settlement Instructions
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param settlementInstructionQuery The queryParameters which control how the settlement instructions are built and returned.
     */
    public async buildSettlementInstructions (scope: string, code: string, settlementInstructionQuery: SettlementInstructionQuery, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListWithPostBodiesOfSettlementInstructionWithTransactionToSettlementInstructionQuery;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/settlementinstructions/$build'
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
            throw new Error('Required parameter scope was null or undefined when calling buildSettlementInstructions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling buildSettlementInstructions.');
        }

        // verify required parameter 'settlementInstructionQuery' is not null or undefined
        if (settlementInstructionQuery === null || settlementInstructionQuery === undefined) {
            throw new Error('Required parameter settlementInstructionQuery was null or undefined when calling buildSettlementInstructions.');
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
            body: ObjectSerializer.serialize(settlementInstructionQuery, "SettlementInstructionQuery")
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
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListWithPostBodiesOfSettlementInstructionWithTransactionToSettlementInstructionQuery;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListWithPostBodiesOfSettlementInstructionWithTransactionToSettlementInstructionQuery");
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
     * Builds and returns all transactions that affect the holdings of a portfolio over a given interval of  effective time into a set of output transactions. This includes transactions automatically generated by  LUSID such as holding adjustments.
     * @summary BuildTransactions: Build transactions
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param transactionQueryParameters The query queryParameters which control how the output transactions are built.
     * @param asAt The asAt datetime at which to build the transactions. Defaults to return the latest              version of each transaction if not specified.
     * @param filter Expression to filter the result set.              For example, to return only transactions with a transaction type of \&#39;Buy\&#39;, specify \&quot;type eq \&#39;Buy\&#39;\&quot;.              For more information about filtering LUSID results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; or \&quot;Transaction\&quot; domain to decorate onto              the transactions. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or              \&quot;Transaction/strategy/quantsignal\&quot;.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param page The pagination token to use to continue listing transactions from a previous call to BuildTransactions.
     * @param dataModelScope The optional scope of a Custom Data Model to use
     * @param dataModelCode The optional code of a Custom Data Model to use
     */
    public async buildTransactions (scope: string, code: string, transactionQueryParameters: TransactionQueryParameters, asAt?: Date, filter?: string, propertyKeys?: Array<string>, limit?: number, page?: string, dataModelScope?: string, dataModelCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfOutputTransaction;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions/$build'
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
            throw new Error('Required parameter scope was null or undefined when calling buildTransactions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling buildTransactions.');
        }

        // verify required parameter 'transactionQueryParameters' is not null or undefined
        if (transactionQueryParameters === null || transactionQueryParameters === undefined) {
            throw new Error('Required parameter transactionQueryParameters was null or undefined when calling buildTransactions.');
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

        if (dataModelScope !== undefined) {
            localVarQueryParameters['dataModelScope'] = ObjectSerializer.serialize(dataModelScope, "string");
        }

        if (dataModelCode !== undefined) {
            localVarQueryParameters['dataModelCode'] = ObjectSerializer.serialize(dataModelCode, "string");
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
     * Cancel all previous holding adjustments made on the specified transaction portfolio for a specified effective  datetime. This should be used to undo holding adjustments made via set holdings or adjust holdings.
     * @summary CancelAdjustHoldings: Cancel adjust holdings
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param effectiveAt The effective datetime or cut label at which the holding adjustments should be undone.
     */
    public async cancelAdjustHoldings (scope: string, code: string, effectiveAt: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings'
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
            throw new Error('Required parameter scope was null or undefined when calling cancelAdjustHoldings.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling cancelAdjustHoldings.');
        }

        // verify required parameter 'effectiveAt' is not null or undefined
        if (effectiveAt === null || effectiveAt === undefined) {
            throw new Error('Required parameter effectiveAt was null or undefined when calling cancelAdjustHoldings.');
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
     * Cancel one previously sent holding adjustment without affecting the rest of the adjustment in the previous request on the specified effective datetime.
     * @summary CancelSingleAdjustHolding: Cancel single holding adjustment.
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param effectiveAt The effective datetime or cut label at which the previous adjustment was made.
     * @param cancelSingleHoldingAdjustmentRequest The selected holding adjustment to be canceled.
     */
    public async cancelSingleAdjustHolding (scope: string, code: string, effectiveAt: string, cancelSingleHoldingAdjustmentRequest: CancelSingleHoldingAdjustmentRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings/$cancelAdjustment'
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
            throw new Error('Required parameter scope was null or undefined when calling cancelSingleAdjustHolding.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling cancelSingleAdjustHolding.');
        }

        // verify required parameter 'effectiveAt' is not null or undefined
        if (effectiveAt === null || effectiveAt === undefined) {
            throw new Error('Required parameter effectiveAt was null or undefined when calling cancelSingleAdjustHolding.');
        }

        // verify required parameter 'cancelSingleHoldingAdjustmentRequest' is not null or undefined
        if (cancelSingleHoldingAdjustmentRequest === null || cancelSingleHoldingAdjustmentRequest === undefined) {
            throw new Error('Required parameter cancelSingleHoldingAdjustmentRequest was null or undefined when calling cancelSingleAdjustHolding.');
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
            body: ObjectSerializer.serialize(cancelSingleHoldingAdjustmentRequest, "CancelSingleHoldingAdjustmentRequest")
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
     * Cancel one or more transactions from the transaction portfolio.
     * @summary CancelTransactions: Cancel transactions
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param transactionIds The IDs of the transactions to cancel.
     */
    public async cancelTransactions (scope: string, code: string, transactionIds: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions'
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
            throw new Error('Required parameter scope was null or undefined when calling cancelTransactions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling cancelTransactions.');
        }

        // verify required parameter 'transactionIds' is not null or undefined
        if (transactionIds === null || transactionIds === undefined) {
            throw new Error('Required parameter transactionIds was null or undefined when calling cancelTransactions.');
        }

        if (transactionIds !== undefined) {
            localVarQueryParameters['transactionIds'] = ObjectSerializer.serialize(transactionIds, "Array<string>");
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
     * Create a transaction portfolio in a particular scope.
     * @summary CreatePortfolio: Create portfolio
     * @param scope The scope in which to create the transaction portfolio.
     * @param createTransactionPortfolioRequest The definition of the transaction portfolio.
     */
    public async createPortfolio (scope: string, createTransactionPortfolioRequest: CreateTransactionPortfolioRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Portfolio;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}'
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
            throw new Error('Required parameter scope was null or undefined when calling createPortfolio.');
        }

        // verify required parameter 'createTransactionPortfolioRequest' is not null or undefined
        if (createTransactionPortfolioRequest === null || createTransactionPortfolioRequest === undefined) {
            throw new Error('Required parameter createTransactionPortfolioRequest was null or undefined when calling createPortfolio.');
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
            body: ObjectSerializer.serialize(createTransactionPortfolioRequest, "CreateTransactionPortfolioRequest")
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
     * Upsert a trade ticket. Broadly equivalent to a singular call to upsert an instrument, then a counterparty and finally  a transaction that makes use of the two. It can be viewed as a utility function or part of a workflow more familiar to users  with OTC systems than flow and equity trading ones.
     * @summary CreateTradeTicket: Create Trade Ticket
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param lusidTradeTicket the trade ticket to upsert
     */
    public async createTradeTicket (scope: string, code: string, lusidTradeTicket?: LusidTradeTicket, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: LusidTradeTicket;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/$tradeticket'
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
            throw new Error('Required parameter scope was null or undefined when calling createTradeTicket.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling createTradeTicket.');
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
            body: ObjectSerializer.serialize(lusidTradeTicket, "LusidTradeTicket")
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
            return new Promise<{ response: http.IncomingMessage; body: LusidTradeTicket;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "LusidTradeTicket");
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
     * Delete one or more custodian accounts from the Transaction Portfolios. Soft deletion marks the custodian account as inactive  While the Hard deletion is deleting the custodian account.  The batch limit per request is 2,000.
     * @summary DeleteCustodianAccounts: Soft or hard delete multiple custodian accounts
     * @param scope The scope of the Transaction Portfolios.
     * @param code The code of the Transaction Portfolios. Together with the scope this uniquely identifies              the Transaction Portfolios.
     * @param resourceId The scope and codes of the custodian accounts to delete.
     * @param deleteMode The delete mode to use (defaults to \&#39;Soft\&#39;).
     */
    public async deleteCustodianAccounts (scope: string, code: string, resourceId: Array<ResourceId>, deleteMode?: 'Soft' | 'Hard', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeleteCustodianAccountsResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/custodianaccounts/$delete'
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
            throw new Error('Required parameter scope was null or undefined when calling deleteCustodianAccounts.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteCustodianAccounts.');
        }

        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new Error('Required parameter resourceId was null or undefined when calling deleteCustodianAccounts.');
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
            body: ObjectSerializer.serialize(resourceId, "Array<ResourceId>")
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
            return new Promise<{ response: http.IncomingMessage; body: DeleteCustodianAccountsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeleteCustodianAccountsResponse");
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
     * Delete one or more properties from a single transaction in a transaction portfolio.
     * @summary DeletePropertiesFromTransaction: Delete properties from transaction
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param transactionId The unique ID of the transaction from which to delete properties.
     * @param propertyKeys The property keys of the properties to delete.              These must be from the \&quot;Transaction\&quot; domain and have the format {domain}/{scope}/{code}, for example              \&quot;Transaction/strategy/quantsignal\&quot;.
     */
    public async deletePropertiesFromTransaction (scope: string, code: string, transactionId: string, propertyKeys: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions/{transactionId}/properties'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
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
            throw new Error('Required parameter scope was null or undefined when calling deletePropertiesFromTransaction.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deletePropertiesFromTransaction.');
        }

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling deletePropertiesFromTransaction.');
        }

        // verify required parameter 'propertyKeys' is not null or undefined
        if (propertyKeys === null || propertyKeys === undefined) {
            throw new Error('Required parameter propertyKeys was null or undefined when calling deletePropertiesFromTransaction.');
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
     * Delete the specified settlement instructions
     * @summary [EARLY ACCESS] DeleteSettlementInstructions: Delete Settlement Instructions.
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio. Together with the scope this uniquely identifies              the portfolio.
     * @param settlementInstructionIds A list of Ids of settlement instructions to be deleted.
     */
    public async deleteSettlementInstructions (scope: string, code: string, settlementInstructionIds: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/settlementinstructions'
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
            throw new Error('Required parameter scope was null or undefined when calling deleteSettlementInstructions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteSettlementInstructions.');
        }

        // verify required parameter 'settlementInstructionIds' is not null or undefined
        if (settlementInstructionIds === null || settlementInstructionIds === undefined) {
            throw new Error('Required parameter settlementInstructionIds was null or undefined when calling deleteSettlementInstructions.');
        }

        if (settlementInstructionIds !== undefined) {
            localVarQueryParameters['settlementInstructionIds'] = ObjectSerializer.serialize(settlementInstructionIds, "Array<string>");
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
     * Get an A2B report for the given portfolio.
     * @summary GetA2BData: Get A2B data
     * @param scope The scope of the portfolio to retrieve the A2B report for.
     * @param code The code of the portfolio to retrieve the A2B report for. Together with the scope this              uniquely identifies the portfolio.
     * @param fromEffectiveAt The lower bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no lower bound if this is not specified.
     * @param toEffectiveAt The upper bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no upper bound if this is not specified.
     * @param asAt The asAt datetime at which to retrieve the portfolio. Defaults to return the latest version              of each transaction if not specified.
     * @param recipeIdScope The scope of the given recipeId
     * @param recipeIdCode The code of the given recipeId
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; domain to decorate onto              the results. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot;.
     * @param filter Expression to filter the result set.              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     */
    public async getA2BData (scope: string, code: string, fromEffectiveAt: string, toEffectiveAt: string, asAt?: Date, recipeIdScope?: string, recipeIdCode?: string, propertyKeys?: Array<string>, filter?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfA2BDataRecord;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/a2b'
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
            throw new Error('Required parameter scope was null or undefined when calling getA2BData.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getA2BData.');
        }

        // verify required parameter 'fromEffectiveAt' is not null or undefined
        if (fromEffectiveAt === null || fromEffectiveAt === undefined) {
            throw new Error('Required parameter fromEffectiveAt was null or undefined when calling getA2BData.');
        }

        // verify required parameter 'toEffectiveAt' is not null or undefined
        if (toEffectiveAt === null || toEffectiveAt === undefined) {
            throw new Error('Required parameter toEffectiveAt was null or undefined when calling getA2BData.');
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
     * Get an A2B report at the movement level for the given portfolio.
     * @summary GetA2BMovements: Get an A2B report at the movement level for the given portfolio.
     * @param scope The scope of the portfolio to retrieve the A2B movement report for.
     * @param code The code of the portfolio to retrieve the A2B movement report for. Together with the scope this              uniquely identifies the portfolio.
     * @param fromEffectiveAt The lower bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no lower bound if this is not specified.
     * @param toEffectiveAt The upper bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no upper bound if this is not specified.
     * @param asAt The asAt datetime at which to retrieve the portfolio. Defaults to return the latest version              of each transaction if not specified.
     * @param recipeIdScope The scope of the given recipeId
     * @param recipeIdCode The code of the given recipeId
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; domain to decorate onto              the results. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot;.
     * @param filter Expression to filter the result set.              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     */
    public async getA2BMovements (scope: string, code: string, fromEffectiveAt: string, toEffectiveAt: string, asAt?: Date, recipeIdScope?: string, recipeIdCode?: string, propertyKeys?: Array<string>, filter?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfA2BMovementRecord;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/a2bmovements'
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
            throw new Error('Required parameter scope was null or undefined when calling getA2BMovements.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getA2BMovements.');
        }

        // verify required parameter 'fromEffectiveAt' is not null or undefined
        if (fromEffectiveAt === null || fromEffectiveAt === undefined) {
            throw new Error('Required parameter fromEffectiveAt was null or undefined when calling getA2BMovements.');
        }

        // verify required parameter 'toEffectiveAt' is not null or undefined
        if (toEffectiveAt === null || toEffectiveAt === undefined) {
            throw new Error('Required parameter toEffectiveAt was null or undefined when calling getA2BMovements.');
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
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfA2BMovementRecord;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfA2BMovementRecord");
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
     * We bucket/aggregate a transaction portfolio\'s instruments by date or tenor specified in the request.  The cashflows are grouped by both instrumentId and currency.                If you want transactional level cashflow, please use the \'GetUpsertableCashFlows\' endpoint.  If you want instrument cashflow, please use the \'GetPortfolioCashFlows\' endpoint.  Note that these endpoints do not apply bucketing.
     * @summary GetBucketedCashFlows: Get bucketed cash flows from a list of portfolios
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies the portfolio.
     * @param bucketedCashFlowRequest Request specifying the bucketing of cashflows
     */
    public async getBucketedCashFlows (scope: string, code: string, bucketedCashFlowRequest?: BucketedCashFlowRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BucketedCashFlowResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/bucketedCashFlows'
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
            throw new Error('Required parameter scope was null or undefined when calling getBucketedCashFlows.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getBucketedCashFlows.');
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
            body: ObjectSerializer.serialize(bucketedCashFlowRequest, "BucketedCashFlowRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: BucketedCashFlowResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "BucketedCashFlowResponse");
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
     * Retrieve the definition of a particular Custodian Account which is part of a Transaction Portfolios.
     * @summary GetCustodianAccount: Get Custodian Account
     * @param scope The scope of the Transaction Portfolio.
     * @param code The code of the Transaction Portfolio. Together with the scope this uniquely identifies the Transaction Portfolio.
     * @param custodianAccountScope The scope of the Custodian Account.
     * @param custodianAccountCode The code of the Custodian Account.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the Custodian Account properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the Custodian Account definition. Defaults to returning the latest version of the Custodian Account definition if not specified.
     * @param propertyKeys A list of property keys from the \&#39;CustodianAccount\&#39; domain to decorate onto the Custodian Account.              These must take the format {domain}/{scope}/{code}, for example \&#39;CustodianAccount/Manager/Id\&#39;. If no properties are specified, then no properties will be returned.
     */
    public async getCustodianAccount (scope: string, code: string, custodianAccountScope: string, custodianAccountCode: string, effectiveAt?: string, asAt?: Date, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CustodianAccount;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/custodianaccounts/{custodianAccountScope}/{custodianAccountCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'custodianAccountScope' + '}', encodeURIComponent(String(custodianAccountScope)))
            .replace('{' + 'custodianAccountCode' + '}', encodeURIComponent(String(custodianAccountCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling getCustodianAccount.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getCustodianAccount.');
        }

        // verify required parameter 'custodianAccountScope' is not null or undefined
        if (custodianAccountScope === null || custodianAccountScope === undefined) {
            throw new Error('Required parameter custodianAccountScope was null or undefined when calling getCustodianAccount.');
        }

        // verify required parameter 'custodianAccountCode' is not null or undefined
        if (custodianAccountCode === null || custodianAccountCode === undefined) {
            throw new Error('Required parameter custodianAccountCode was null or undefined when calling getCustodianAccount.');
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
            return new Promise<{ response: http.IncomingMessage; body: CustodianAccount;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CustodianAccount");
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
     * Get certain details associated with a transaction portfolio.
     * @summary GetDetails: Get details
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the              scope this uniquely identifies the transaction portfolio.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the details of the transaction              portfolio. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the details of the transaction portfolio. Defaults              to returning the latest version of the details if not specified.
     */
    public async getDetails (scope: string, code: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioDetails;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/details'
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
            throw new Error('Required parameter scope was null or undefined when calling getDetails.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getDetails.');
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
            return new Promise<{ response: http.IncomingMessage; body: PortfolioDetails;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioDetails");
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
     * Lists all transactions that affect the holdings of a portfolio over a given effective interval. This includes  transactions automatically generated by LUSID such as holding adjustments.
     * @summary GetHoldingContributors: Get Holdings Contributors
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param holdingId The unique holding identifier
     * @param effectiveDate Effective date
     * @param fromTradeDate The from trade date, defaults to first time this holding is opened, lower bound for transactions
     * @param toTradeDate The to trade date upper bound date, defaults to effectiveDate. upper bound for transactions
     * @param includeHistoric If true, transactions from previously closed holdings are returned.              If false, only transactions from last time position is opened.
     * @param taxLotId Constrains the Holding Contributors to those which contributed to the specified tax lot.
     * @param includeUnsettledMovements If true, contributing transaction which have not settled yet will also be returned. False by default
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param asAt The asAt datetime at which to build the transactions. Defaults to return the latest              version of each transaction if not specified.
     * @param page The pagination token to use to continue listing transactions from a previous call to GetHoldingContributors.
     */
    public async getHoldingContributors (scope: string, code: string, holdingId: number, effectiveDate?: string, fromTradeDate?: string, toTradeDate?: string, includeHistoric?: boolean, taxLotId?: string, includeUnsettledMovements?: boolean, limit?: number, asAt?: Date, page?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfHoldingContributor;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings/{holdingId}/contributors'
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
            throw new Error('Required parameter scope was null or undefined when calling getHoldingContributors.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getHoldingContributors.');
        }

        // verify required parameter 'holdingId' is not null or undefined
        if (holdingId === null || holdingId === undefined) {
            throw new Error('Required parameter holdingId was null or undefined when calling getHoldingContributors.');
        }

        if (effectiveDate !== undefined) {
            localVarQueryParameters['effectiveDate'] = ObjectSerializer.serialize(effectiveDate, "string");
        }

        if (fromTradeDate !== undefined) {
            localVarQueryParameters['fromTradeDate'] = ObjectSerializer.serialize(fromTradeDate, "string");
        }

        if (toTradeDate !== undefined) {
            localVarQueryParameters['toTradeDate'] = ObjectSerializer.serialize(toTradeDate, "string");
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
     * Calculate holdings for a transaction portfolio.
     * @summary GetHoldings: Get holdings
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the holdings of the transaction              portfolio. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the holdings of the transaction portfolio. Defaults              to return the latest version if not specified.
     * @param filter Expression to filter the result set.              For example, to filter on the Holding Type, use \&quot;holdingType eq \&#39;p\&#39;\&quot;.              For more information about filtering LUSID results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot;, \&quot;Holding\&quot;, \&quot;Custodian Account\&quot;, \&quot;Legal Entity\&quot; or \&quot;Portfolio\&quot; domain to decorate onto              holdings. These must have the format {domain}/{scope}/{code}, for example \&quot;Instrument/system/Name\&quot; or \&quot;Holding/system/Cost\&quot;.
     * @param byTaxlots Whether or not to expand the holdings to return the underlying tax-lots. Defaults to              False.
     * @param includeSettlementEventsAfterDays Number of days ahead to bring back settlements from, in relation to the specified effectiveAt
     * @param timelineScope The scope of the Timeline.
     * @param timelineCode The code of the Timeline.
     * @param closedPeriodId The closed period ID. If this is specified, both timelineScope and timelineCode must be specified. Either closedPeriodId or effectiveAt can be used with a Timeline.
     */
    public async getHoldings (scope: string, code: string, effectiveAt?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, byTaxlots?: boolean, includeSettlementEventsAfterDays?: number, timelineScope?: string, timelineCode?: string, closedPeriodId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfPortfolioHolding;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings'
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
            throw new Error('Required parameter scope was null or undefined when calling getHoldings.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getHoldings.');
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

        if (timelineScope !== undefined) {
            localVarQueryParameters['timelineScope'] = ObjectSerializer.serialize(timelineScope, "string");
        }

        if (timelineCode !== undefined) {
            localVarQueryParameters['timelineCode'] = ObjectSerializer.serialize(timelineCode, "string");
        }

        if (closedPeriodId !== undefined) {
            localVarQueryParameters['closedPeriodId'] = ObjectSerializer.serialize(closedPeriodId, "string");
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
     * Get a holdings adjustment made to a transaction portfolio at a specific effective datetime. Note that a  holdings adjustment will only be returned if one exists for the specified effective datetime.
     * @summary GetHoldingsAdjustment: Get holdings adjustment
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param effectiveAt The effective datetime or cut label of the holdings adjustment.
     * @param asAt The asAt datetime at which to retrieve the holdings adjustment. Defaults to the return the latest              version of the holdings adjustment if not specified.
     * @param propertyKeys A list of property keys from the ‘Instrument\&#39; domain to decorate onto holdings adjustments.              These must have the format {domain}/{scope}/{code}, for example \&#39;Instrument/system/Name\&#39;.              Note that properties from the \&#39;Holding’ domain are automatically returned.
     */
    public async getHoldingsAdjustment (scope: string, code: string, effectiveAt: string, asAt?: Date, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: HoldingsAdjustment;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdingsadjustments/{effectiveAt}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'effectiveAt' + '}', encodeURIComponent(String(effectiveAt)));
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
            throw new Error('Required parameter scope was null or undefined when calling getHoldingsAdjustment.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getHoldingsAdjustment.');
        }

        // verify required parameter 'effectiveAt' is not null or undefined
        if (effectiveAt === null || effectiveAt === undefined) {
            throw new Error('Required parameter effectiveAt was null or undefined when calling getHoldingsAdjustment.');
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
            return new Promise<{ response: http.IncomingMessage; body: HoldingsAdjustment;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "HoldingsAdjustment");
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
     * Get the holdings of a transaction portfolio. Create virtual holdings for any outstanding orders,  and account for order state/fulfillment; that is, treat outstanding orders (and related records) as  if they had been realised at moment of query.
     * @summary GetHoldingsWithOrders: Get holdings with orders
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the holdings of the transaction              portfolio. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the holdings of the transaction portfolio. Defaults              to return the latest version of the holdings if not specified.
     * @param filter Expression to filter the result set.              For example, to filter on the Holding Type, use \&quot;holdingType eq \&#39;p\&#39;\&quot;              For more information about filtering LUSID results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot;, \&quot;Holding\&quot; or \&quot;Portfolio\&quot; domain to decorate onto              the holdings. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or \&quot;Holding/system/Cost\&quot;.
     * @param byTaxlots Whether or not to expand the holdings to return the underlying tax-lots. Defaults to              False.
     * @param recipeIdScope The scope of the given recipeId
     * @param recipeIdCode The code of the given recipeId
     * @param includeSettlementEventsAfterDays Number of days ahead to bring back settlements from, in relation to the specified effectiveAt
     */
    public async getHoldingsWithOrders (scope: string, code: string, effectiveAt?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, byTaxlots?: boolean, recipeIdScope?: string, recipeIdCode?: string, includeSettlementEventsAfterDays?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListWithWarningsOfPortfolioHolding;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdingsWithOrders'
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
            throw new Error('Required parameter scope was null or undefined when calling getHoldingsWithOrders.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getHoldingsWithOrders.');
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

        if (recipeIdScope !== undefined) {
            localVarQueryParameters['recipeIdScope'] = ObjectSerializer.serialize(recipeIdScope, "string");
        }

        if (recipeIdCode !== undefined) {
            localVarQueryParameters['recipeIdCode'] = ObjectSerializer.serialize(recipeIdCode, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListWithWarningsOfPortfolioHolding;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListWithWarningsOfPortfolioHolding");
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
     * Lists all transactions that affect multiple specified holdings of a portfolio over a given effective interval. This includes  transactions automatically generated by LUSID such as holding adjustments.
     * @summary GetMultipleHoldingContributors: Get Multiple Holding Contributors
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param holdingIdsRequest The array of unique holding identifiers
     * @param effectiveDate Effective date
     * @param fromTransactionDate The from trade date, defaults to first time this holding is opened, lower bound for transactions
     * @param toTransactionDate The to trade date upper bound date, defaults to effectiveDate. upper bound for transactions
     * @param includeHistoric If true, transactions from previously closed holdings are returned.              If false, only transactions from last time position is opened.
     * @param taxLotId Constrains the Holding Contributors to those which contributed to the specified tax lot.
     * @param includeUnsettledMovements If true, contributing transaction which have not settled yet will also be returned. False by default
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 100 if not specified.
     * @param asAt The asAt datetime at which to build the transactions. Defaults to return the latest              version of each transaction if not specified.
     * @param page The pagination token to use to continue listing transactions from a previous call to GetHoldingContributors.
     */
    public async getMultipleHoldingContributors (scope: string, code: string, holdingIdsRequest: HoldingIdsRequest, effectiveDate?: string, fromTransactionDate?: string, toTransactionDate?: string, includeHistoric?: boolean, taxLotId?: string, includeUnsettledMovements?: boolean, limit?: number, asAt?: Date, page?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfHoldingContributor;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings/contributors/$get'
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
            throw new Error('Required parameter scope was null or undefined when calling getMultipleHoldingContributors.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getMultipleHoldingContributors.');
        }

        // verify required parameter 'holdingIdsRequest' is not null or undefined
        if (holdingIdsRequest === null || holdingIdsRequest === undefined) {
            throw new Error('Required parameter holdingIdsRequest was null or undefined when calling getMultipleHoldingContributors.');
        }

        if (effectiveDate !== undefined) {
            localVarQueryParameters['effectiveDate'] = ObjectSerializer.serialize(effectiveDate, "string");
        }

        if (fromTransactionDate !== undefined) {
            localVarQueryParameters['fromTransactionDate'] = ObjectSerializer.serialize(fromTransactionDate, "string");
        }

        if (toTransactionDate !== undefined) {
            localVarQueryParameters['toTransactionDate'] = ObjectSerializer.serialize(toTransactionDate, "string");
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
            body: ObjectSerializer.serialize(holdingIdsRequest, "HoldingIdsRequest")
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
     * Get the set of cash flows that occur in a window for the transaction portfolio\'s instruments.                Note that grouping can affect the quantity of information returned; where a holding is an amalgamation of one or more (e.g. cash) instruments, a unique  transaction identifier will not be available. The same may go for diagnostic information (e.g. multiple sources of an aggregate cash amount on a date that is  not split out. Grouping at the transaction and instrument level is recommended for those seeking to attribute individual flows.
     * @summary GetPortfolioCashFlows: Get portfolio cash flows
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this               uniquely identifies the portfolio.
     * @param effectiveAt The valuation (pricing) effective datetime or cut label (inclusive) at which to evaluate the cashflows.  This determines whether cashflows are evaluated in a historic or forward looking context and will, for certain models, affect where data is looked up.  For example, on a swap if the effectiveAt is in the middle of the window, cashflows before it will be historic and resets assumed to exist where if the effectiveAt  is before the start of the range they are forward looking and will be expectations assuming the model supports that.  There is evidently a presumption here about availability of data and that the effectiveAt is realistically on or before the real-world today.
     * @param windowStart The lower bound effective datetime or cut label (inclusive) from which to retrieve the cashflows.               There is no lower bound if this is not specified. i.e. it is the minimum date.
     * @param windowEnd The upper bound effective datetime or cut label (inclusive) from which to retrieve the cashflows.               The upper bound defaults to \&#39;max date\&#39; if it is not specified
     * @param asAt The asAt datetime at which to retrieve the data. Defaults to returning the latest version               of each transaction if not specified.
     * @param filter Expression to filter the result set.               For example, to return only transactions with a transaction type of \&#39;Buy\&#39;, specify \&quot;type eq \&#39;Buy\&#39;\&quot;.               For more information about filtering LUSID results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param recipeIdScope The scope of the given recipeId
     * @param recipeIdCode The code of the given recipeID
     * @param excludeUnsettledTrades If absent or set to false, cashflows will returned based on trade date - more specifically, cashflows from any unsettled trades will be included in the results. If set to true, unsettled trades will be excluded from the result set.
     */
    public async getPortfolioCashFlows (scope: string, code: string, effectiveAt?: string, windowStart?: string, windowEnd?: string, asAt?: Date, filter?: string, recipeIdScope?: string, recipeIdCode?: string, excludeUnsettledTrades?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfInstrumentCashFlow;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/cashflows'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioCashFlows.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioCashFlows.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (windowStart !== undefined) {
            localVarQueryParameters['windowStart'] = ObjectSerializer.serialize(windowStart, "string");
        }

        if (windowEnd !== undefined) {
            localVarQueryParameters['windowEnd'] = ObjectSerializer.serialize(windowEnd, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (recipeIdScope !== undefined) {
            localVarQueryParameters['recipeIdScope'] = ObjectSerializer.serialize(recipeIdScope, "string");
        }

        if (recipeIdCode !== undefined) {
            localVarQueryParameters['recipeIdCode'] = ObjectSerializer.serialize(recipeIdCode, "string");
        }

        if (excludeUnsettledTrades !== undefined) {
            localVarQueryParameters['excludeUnsettledTrades'] = ObjectSerializer.serialize(excludeUnsettledTrades, "boolean");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfInstrumentCashFlow;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfInstrumentCashFlow");
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
     * Get a cash ladder for a transaction portfolio.
     * @summary GetPortfolioCashLadder: Get portfolio cash ladder
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this              uniquely identifies the portfolio.
     * @param fromEffectiveAt The lower bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no lower bound if this is not specified.
     * @param toEffectiveAt The upper bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no upper bound if this is not specified.
     * @param effectiveAt The valuation (pricing) effective datetime or cut label (inclusive) at which to evaluate the cashflows.  This determines whether cashflows are evaluated in a historic or forward looking context and will, for certain models, affect where data is looked up.  For example, on a swap if the effectiveAt is in the middle of the window, cashflows before it will be historic and resets assumed to exist where if the effectiveAt  is before the start of the range they are forward looking and will be expectations assuming the model supports that.  There is evidently a presumption here about availability of data and that the effectiveAt is realistically on or before the real-world today.
     * @param asAt The asAt datetime at which to retrieve the portfolio. Defaults to returning the latest version              of each transaction if not specified.
     * @param filter Expression to filter the result set.              For example, to return only transactions with a transaction type of \&#39;Buy\&#39;, specify \&quot;type eq \&#39;Buy\&#39;\&quot;.              For more information about filtering LUSID results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param recipeIdScope The scope of the given recipeId
     * @param recipeIdCode The code of the given recipeID
     * @param excludeUnsettledTrades If absent or set to false, cashflows will returned based on trade date - more specifically, cashflows from any unsettled trades will be included in the results. If set to true, unsettled trades will be excluded from the result set.
     */
    public async getPortfolioCashLadder (scope: string, code: string, fromEffectiveAt: string, toEffectiveAt: string, effectiveAt: string, asAt?: Date, filter?: string, recipeIdScope?: string, recipeIdCode?: string, excludeUnsettledTrades?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolioCashLadder;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/cashladder'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioCashLadder.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioCashLadder.');
        }

        // verify required parameter 'fromEffectiveAt' is not null or undefined
        if (fromEffectiveAt === null || fromEffectiveAt === undefined) {
            throw new Error('Required parameter fromEffectiveAt was null or undefined when calling getPortfolioCashLadder.');
        }

        // verify required parameter 'toEffectiveAt' is not null or undefined
        if (toEffectiveAt === null || toEffectiveAt === undefined) {
            throw new Error('Required parameter toEffectiveAt was null or undefined when calling getPortfolioCashLadder.');
        }

        // verify required parameter 'effectiveAt' is not null or undefined
        if (effectiveAt === null || effectiveAt === undefined) {
            throw new Error('Required parameter effectiveAt was null or undefined when calling getPortfolioCashLadder.');
        }

        if (fromEffectiveAt !== undefined) {
            localVarQueryParameters['fromEffectiveAt'] = ObjectSerializer.serialize(fromEffectiveAt, "string");
        }

        if (toEffectiveAt !== undefined) {
            localVarQueryParameters['toEffectiveAt'] = ObjectSerializer.serialize(toEffectiveAt, "string");
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

        if (recipeIdScope !== undefined) {
            localVarQueryParameters['recipeIdScope'] = ObjectSerializer.serialize(recipeIdScope, "string");
        }

        if (recipeIdCode !== undefined) {
            localVarQueryParameters['recipeIdCode'] = ObjectSerializer.serialize(recipeIdCode, "string");
        }

        if (excludeUnsettledTrades !== undefined) {
            localVarQueryParameters['excludeUnsettledTrades'] = ObjectSerializer.serialize(excludeUnsettledTrades, "boolean");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolioCashLadder;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfPortfolioCashLadder");
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
     * Get a cash statement for a transaction portfolio.
     * @summary GetPortfolioCashStatement: Get portfolio cash statement
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this              uniquely identifies the portfolio.
     * @param fromEffectiveAt The lower bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no lower bound if this is not specified.
     * @param toEffectiveAt The upper bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no upper bound if this is not specified.
     * @param asAt The asAt datetime at which to retrieve the portfolio. Defaults to returning the latest version              of each transaction if not specified.
     * @param filter Expression to filter the result set.              For example, to return only transactions with a transaction type of \&#39;Buy\&#39;, specify \&quot;type eq \&#39;Buy\&#39;\&quot;.              For more information about filtering LUSID results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param recipeIdScope The scope of the given recipeId
     * @param recipeIdCode The code of the given recipeID
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; or \&quot;Transaction\&quot; domain to decorate onto              the cash flows\&#39; transactions. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or              \&quot;Transaction/strategy/quantsignal\&quot;.
     */
    public async getPortfolioCashStatement (scope: string, code: string, fromEffectiveAt: string, toEffectiveAt: string, asAt?: Date, filter?: string, recipeIdScope?: string, recipeIdCode?: string, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolioCashFlow;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/cashstatement'
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
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioCashStatement.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioCashStatement.');
        }

        // verify required parameter 'fromEffectiveAt' is not null or undefined
        if (fromEffectiveAt === null || fromEffectiveAt === undefined) {
            throw new Error('Required parameter fromEffectiveAt was null or undefined when calling getPortfolioCashStatement.');
        }

        // verify required parameter 'toEffectiveAt' is not null or undefined
        if (toEffectiveAt === null || toEffectiveAt === undefined) {
            throw new Error('Required parameter toEffectiveAt was null or undefined when calling getPortfolioCashStatement.');
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

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolioCashFlow;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfPortfolioCashFlow");
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
     * Get all of the changes that have happened to a transaction.
     * @summary GetTransactionHistory: Get the history of a transaction
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param transactionId The unique ID of the transaction to create or update.
     * @param asAt The asAt datetime at which to retrieve the history of the transaction. Defaults              to return the latest version if not specified.
     */
    public async getTransactionHistory (scope: string, code: string, transactionId: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfChangeHistory;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions/{transactionId}/history'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
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
            throw new Error('Required parameter scope was null or undefined when calling getTransactionHistory.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getTransactionHistory.');
        }

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling getTransactionHistory.');
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfChangeHistory;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfChangeHistory");
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
     * Gets the Transaction Settlement Status for the requested transaction.
     * @summary [EARLY ACCESS] GetTransactionSettlementStatus: Gets the Transaction Settlement Status for the requested transaction.
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param transactionId The id of the transaction
     * @param effectiveAt The effective datetime or cut label for which to get the transaction               settlement status. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to get the transaction settlement status.               Defaults to return the latest status if not specified.
     */
    public async getTransactionSettlementStatus (scope: string, code: string, transactionId: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TransactionSettlementStatus;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions/{transactionId}/settlementstatus'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
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
            throw new Error('Required parameter scope was null or undefined when calling getTransactionSettlementStatus.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getTransactionSettlementStatus.');
        }

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling getTransactionSettlementStatus.');
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
            return new Promise<{ response: http.IncomingMessage; body: TransactionSettlementStatus;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "TransactionSettlementStatus");
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
     * Retrieve all the transactions that occurred during a particular time interval.                If the portfolio is a derived transaction portfolio, the transactions returned are the  union set of all transactions of the parent (and any grandparents, etc.) as well as  those of the derived transaction portfolio itself.
     * @summary GetTransactions: Get transactions
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies               the transaction portfolio.
     * @param fromTransactionDate The lower bound effective datetime or cut label (inclusive) from which to retrieve transactions.               There is no lower bound if this is not specified.
     * @param toTransactionDate The upper bound effective datetime or cut label (inclusive) from which to retrieve transactions.               There is no upper bound if this is not specified.
     * @param asAt The asAt datetime at which to retrieve transactions. Defaults to returning the latest version               of each transaction if not specified.
     * @param filter Expression with which to filter the result set.               For example, to return only transactions with a transaction type of \&#39;Buy\&#39;, specify \&quot;type eq \&#39;Buy\&#39;\&quot;               For more information about filtering LUSID results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param propertyKeys A list of property keys from the \&#39;Instrument\&#39;, \&#39;Transaction\&#39;, \&quot;LegalEntity\&quot; or \&quot;CustodianAccount\&quot; domain to decorate onto               transactions. These must have the format {domain}/{scope}/{code}, for example \&#39;Instrument/system/Name\&#39; or               \&#39;Transaction/strategy/quantsignal\&#39;.
     * @param page The pagination token to use to continue listing transactions from a previous call to GetTransactions.
     * @param limit When paginating, limit the number of returned results to this many. The current behaviour is               to return all transactions if possible, but this will change to defaulting to 1000 if not specified in the future. It is recommended               to populate this field to enable pagination.
     * @param showCancelledTransactions Option to specify whether or not to include cancelled transactions,               including previous versions of transactions which have since been amended.               Defaults to False if not specified.
     * @param sortBy A list of field names or properties to sort by, each suffixed by \&quot; ASC\&quot; or \&quot; DESC\&quot;.
     * @param dataModelScope The optional scope of a Custom Data Model to use
     * @param dataModelCode The optional code of a Custom Data Model to use
     */
    public async getTransactions (scope: string, code: string, fromTransactionDate?: string, toTransactionDate?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, page?: string, limit?: number, showCancelledTransactions?: boolean, sortBy?: Array<string>, dataModelScope?: string, dataModelCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfTransaction;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions'
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
            throw new Error('Required parameter scope was null or undefined when calling getTransactions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getTransactions.');
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

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (showCancelledTransactions !== undefined) {
            localVarQueryParameters['showCancelledTransactions'] = ObjectSerializer.serialize(showCancelledTransactions, "boolean");
        }

        if (sortBy !== undefined) {
            localVarQueryParameters['sortBy'] = ObjectSerializer.serialize(sortBy, "Array<string>");
        }

        if (dataModelScope !== undefined) {
            localVarQueryParameters['dataModelScope'] = ObjectSerializer.serialize(dataModelScope, "string");
        }

        if (dataModelCode !== undefined) {
            localVarQueryParameters['dataModelCode'] = ObjectSerializer.serialize(dataModelCode, "string");
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
     * Get the set of cash flows that occur in a window for the given portfolio instruments as a set of upsertable transactions (DTOs).                Note that grouping can affect the quantity of information returned; where a holding is an amalgamation of one or more (e.g. cash) instruments, a unique  transaction identifier will not be available. The same may go for diagnostic information (e.g. multiple sources of an aggregate cash amount on a date that is  not split out. Grouping at the transaction and instrument level is recommended for those seeking to attribute individual flows.                In essence this is identical to the \'GetCashFlows\' endpoint but returns the cash flows as a set of transactions suitable for directly putting back into LUSID.  There are a couple of important points:  (1) Internally it can not be fully known where the user wishes to insert these transactions, e.g. portfolio and movement type.      These are therefore defaulted to a sensible option; the user will likely need to change these.  (2) Similarly, knowledge of any properties the user might wish to add to a transaction are unknown and consequently left empty.  (3) The transaction id that is added is simply a concatenation of the original transaction id, instrument id and payment date and direction. The user can happily override this.
     * @summary GetUpsertablePortfolioCashFlows: Get upsertable portfolio cash flows.
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this               uniquely identifies the portfolio.
     * @param effectiveAt The valuation (pricing) effective datetime or cut label (inclusive) at which to evaluate the cashflows.  This determines whether cashflows are evaluated in a historic or forward looking context and will, for certain models, affect where data is looked up.  For example, on a swap if the effectiveAt is in the middle of the window, cashflows before it will be historic and resets assumed to exist where if the effectiveAt  is before the start of the range they are forward looking and will be expectations assuming the model supports that.  There is evidently a presumption here about availability of data and that the effectiveAt is realistically on or before the real-world today.
     * @param windowStart The lower bound effective datetime or cut label (inclusive) from which to retrieve the cashflows.               There is no lower bound if this is not specified. i.e. uses minimum date-time
     * @param windowEnd The upper bound effective datetime or cut label (inclusive) from which to retrieve the cashflows.               The upper bound defaults to \&#39;max date\&#39; if it is not specified
     * @param asAt The asAt datetime at which to retrieve the portfolio. Defaults to return the latest version               of each transaction if not specified.
     * @param filter Expression to filter the result set.               For example, to return only transactions with a transaction type of \&#39;Buy\&#39;, specify \&quot;type eq \&#39;Buy\&#39;\&quot;.               For more information about filtering LUSID results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param recipeIdScope The scope of the given recipeId
     * @param recipeIdCode The code of the given recipeID
     * @param excludeUnsettledTrades If absent or set to true, unsettled trades will be excluded from the result set. If set to false, cashflows will returned based on trade date - more specifically, cashflows from any unsettled trades will be included in the results.
     */
    public async getUpsertablePortfolioCashFlows (scope: string, code: string, effectiveAt?: string, windowStart?: string, windowEnd?: string, asAt?: Date, filter?: string, recipeIdScope?: string, recipeIdCode?: string, excludeUnsettledTrades?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfTransaction;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/upsertablecashflows'
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
            throw new Error('Required parameter scope was null or undefined when calling getUpsertablePortfolioCashFlows.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getUpsertablePortfolioCashFlows.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (windowStart !== undefined) {
            localVarQueryParameters['windowStart'] = ObjectSerializer.serialize(windowStart, "string");
        }

        if (windowEnd !== undefined) {
            localVarQueryParameters['windowEnd'] = ObjectSerializer.serialize(windowEnd, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (recipeIdScope !== undefined) {
            localVarQueryParameters['recipeIdScope'] = ObjectSerializer.serialize(recipeIdScope, "string");
        }

        if (recipeIdCode !== undefined) {
            localVarQueryParameters['recipeIdCode'] = ObjectSerializer.serialize(recipeIdCode, "string");
        }

        if (excludeUnsettledTrades !== undefined) {
            localVarQueryParameters['excludeUnsettledTrades'] = ObjectSerializer.serialize(excludeUnsettledTrades, "boolean");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfTransaction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfTransaction");
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
     * List the custodian accounts in a Transaction Portfolios
     * @summary ListCustodianAccounts: List Custodian Accounts
     * @param scope The scope of the Transaction Portfolio.
     * @param code The code of the Transaction Portfolio. Together with the scope this uniquely identifies              the Transaction Portfolios.
     * @param effectiveAt The effective datetime or cut label at which to list the TimeVariant properties decorated on Custodian Accounts. Defaults to the current LUSID              system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the instrument. Defaults to              returning the latest version if not specified.
     * @param page The pagination token to use to continue listing custodian accounts; this              value is returned from the previous call. If a pagination token is provided, the filter, effectiveAt              and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter Expression to filter the results.              For example, to filter on the Custodian Account type, specify \&quot;code eq \&#39;001\&#39;\&quot;. For more information about filtering              results, see https://support.lusid.com/knowledgebase/article/KA-01914.
     * @param propertyKeys A list of property keys from the \&#39;CustodianAccount\&#39; domain to decorate onto the Custodian Account.              These must have the format {domain}/{scope}/{code}, for example \&#39;CustodianAccount/system/Name\&#39;.
     */
    public async listCustodianAccounts (scope: string, code: string, effectiveAt?: string, asAt?: Date, page?: string, limit?: number, filter?: string, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfCustodianAccount;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/custodianaccounts'
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
            throw new Error('Required parameter scope was null or undefined when calling listCustodianAccounts.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listCustodianAccounts.');
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
            return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfCustodianAccount;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PagedResourceListOfCustodianAccount");
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
     * List the holdings adjustments made to the specified transaction portfolio over a specified interval of effective time.
     * @summary ListHoldingsAdjustments: List holdings adjustments
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param fromEffectiveAt The lower bound effective datetime or cut label (inclusive) from which to retrieve the holdings              adjustments. There is no lower bound if this is not specified.
     * @param toEffectiveAt The upper bound effective datetime or cut label (inclusive) from which to retrieve the holdings              adjustments. There is no upper bound if this is not specified.
     * @param asAt The asAt datetime at which to retrieve the holdings adjustments. Defaults to return the              latest version of each holding adjustment if not specified.
     */
    public async listHoldingsAdjustments (scope: string, code: string, fromEffectiveAt?: string, toEffectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfHoldingsAdjustmentHeader;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdingsadjustments'
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
            throw new Error('Required parameter scope was null or undefined when calling listHoldingsAdjustments.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listHoldingsAdjustments.');
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfHoldingsAdjustmentHeader;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfHoldingsAdjustmentHeader");
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
     * Display all the Settlement Instructions for a given Portfolio. The transaction Id filter can be ued to return instructions for an individual transaction.
     * @summary [EARLY ACCESS] ListSettlementInstructions: List Settlement Instructions.
     * @param scope The scope of the portfolio to retrieve settlement instructions for.
     * @param code The code of the portfolio to retrieve settlement instructions for.
     * @param fromDate The lower bound effective datetime or cut label (inclusive) from which to retrieve instructions.              There is no lower bound if this is not specified.
     * @param toDate The upper bound effective datetime or cut label (inclusive) from which to retrieve instructions.
     * @param page The pagination token to use to continue listing instructions; this value is returned from the previous call.              If a pagination token is provided, the filter, effectiveAt and asAt fields must not have changed since the original request.
     * @param limit When paginating, limit the results to this number. Defaults to 100 if not specified.
     * @param filter The expression to filter out settlement instructions
     * @param asAt The asAt datetime at which to retrieve the settlement instructions. Defaults to return the latest if not specified.
     */
    public async listSettlementInstructions (scope: string, code: string, fromDate?: string, toDate?: string, page?: string, limit?: number, filter?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfTransactionSettlementInstruction;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/settlementinstructions'
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
            throw new Error('Required parameter scope was null or undefined when calling listSettlementInstructions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling listSettlementInstructions.');
        }

        if (fromDate !== undefined) {
            localVarQueryParameters['fromDate'] = ObjectSerializer.serialize(fromDate, "string");
        }

        if (toDate !== undefined) {
            localVarQueryParameters['toDate'] = ObjectSerializer.serialize(toDate, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfTransactionSettlementInstruction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfTransactionSettlementInstruction");
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
     * Create or update certain details for a particular transaction portfolio.  Note that not all elements of a transaction portfolio definition are  modifiable once it has been created due to the potential implications for data already stored.  The behaviour is defined by the JSON Patch specification.    Currently supported fields are: BaseCurrency, AccountingMethod, SubHoldingKeys, AmortisationMethod, TransactionTypeScope, CashGainLossCalculationDate, InstrumentEventConfiguration, AmortisationRuleSetId, TaxRuleSetScope, SettlementConfiguration.
     * @summary PatchPortfolioDetails: Patch portfolio details
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the              scope this uniquely identifies the transaction portfolio.
     * @param operation The patch document.
     * @param effectiveAt The effective datetime or cut label at which the updated or inserted details should become valid.              Defaults to the current LUSID system datetime if not specified.              Note that this will affect all bitemporal fields (eg: SettlementConfiguration) in the request (but will not be used for any              perpetual fields). When patching a bitemporal field, the field will be updated from the              effectiveAt onwards and until the end of effective time.
     */
    public async patchPortfolioDetails (scope: string, code: string, operation: Array<Operation>, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioDetails;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/details'
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
            throw new Error('Required parameter scope was null or undefined when calling patchPortfolioDetails.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling patchPortfolioDetails.');
        }

        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling patchPortfolioDetails.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: PortfolioDetails;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioDetails");
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
     * Returns the output-transaction(s) - e.g. as returned by BuildTransactions  that would come out of LUSID if the provided TransactionRequest was booked.
     * @summary PreviewTransaction: Preview a transaction
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param transactionRequest The transaction to be previewed.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; or \&quot;Transaction\&quot; domain to decorate onto              the transactions. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or              \&quot;Transaction/strategy/quantsignal\&quot;.
     * @param showCancelledTransactions Option to specify whether to include previous versions of an amended transaction in the response.              Defaults to False if not specified.
     * @param preserveProperties If the preview transaction is an amendment to an existing transaction, then setting this to true will carry forward any unmodified properties from the earlier version.
     * @param dataModelScope The optional scope of a Custom Data Model to use
     * @param dataModelCode The optional code of a Custom Data Model to use
     */
    public async previewTransaction (scope: string, code: string, transactionRequest: TransactionRequest, propertyKeys?: Array<string>, showCancelledTransactions?: boolean, preserveProperties?: boolean, dataModelScope?: string, dataModelCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfOutputTransaction;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/previewTransaction'
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
            throw new Error('Required parameter scope was null or undefined when calling previewTransaction.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling previewTransaction.');
        }

        // verify required parameter 'transactionRequest' is not null or undefined
        if (transactionRequest === null || transactionRequest === undefined) {
            throw new Error('Required parameter transactionRequest was null or undefined when calling previewTransaction.');
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (showCancelledTransactions !== undefined) {
            localVarQueryParameters['showCancelledTransactions'] = ObjectSerializer.serialize(showCancelledTransactions, "boolean");
        }

        if (preserveProperties !== undefined) {
            localVarQueryParameters['preserveProperties'] = ObjectSerializer.serialize(preserveProperties, "boolean");
        }

        if (dataModelScope !== undefined) {
            localVarQueryParameters['dataModelScope'] = ObjectSerializer.serialize(dataModelScope, "string");
        }

        if (dataModelCode !== undefined) {
            localVarQueryParameters['dataModelCode'] = ObjectSerializer.serialize(dataModelCode, "string");
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
            body: ObjectSerializer.serialize(transactionRequest, "TransactionRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfOutputTransaction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfOutputTransaction");
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
     * Try to resolve the instrument for transaction and holdings for a given instrument identifier and a specified  period of time. Also update the instrument identifiers with the given instrument identifiers collection.
     * @summary ResolveInstrument: Resolve instrument
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param instrumentIdentifierType The instrument identifier type.
     * @param instrumentIdentifierValue The value for the given instrument identifier.
     * @param fromEffectiveAt The lower bound effective datetime or cut label (inclusive) from which to retrieve the data.              There is no lower bound if this is not specified.
     * @param reResolve When set to true, instrument resolution will be attempted for all transactions and holdings for the given identifier and date range.              When set to false (default behaviour), instrument resolution will only be attempted for those transactions and holdings that were previously unresolved.
     * @param requestBody The dictionary with the instrument identifiers to be updated on the             transaction and holdings.
     */
    public async resolveInstrument (scope: string, code: string, instrumentIdentifierType: string, instrumentIdentifierValue: string, fromEffectiveAt?: string, reResolve?: boolean, requestBody?: { [key: string]: string; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpsertPortfolioTransactionsResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/$resolve'
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
            throw new Error('Required parameter scope was null or undefined when calling resolveInstrument.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling resolveInstrument.');
        }

        // verify required parameter 'instrumentIdentifierType' is not null or undefined
        if (instrumentIdentifierType === null || instrumentIdentifierType === undefined) {
            throw new Error('Required parameter instrumentIdentifierType was null or undefined when calling resolveInstrument.');
        }

        // verify required parameter 'instrumentIdentifierValue' is not null or undefined
        if (instrumentIdentifierValue === null || instrumentIdentifierValue === undefined) {
            throw new Error('Required parameter instrumentIdentifierValue was null or undefined when calling resolveInstrument.');
        }

        if (instrumentIdentifierType !== undefined) {
            localVarQueryParameters['instrumentIdentifierType'] = ObjectSerializer.serialize(instrumentIdentifierType, "string");
        }

        if (instrumentIdentifierValue !== undefined) {
            localVarQueryParameters['instrumentIdentifierValue'] = ObjectSerializer.serialize(instrumentIdentifierValue, "string");
        }

        if (fromEffectiveAt !== undefined) {
            localVarQueryParameters['fromEffectiveAt'] = ObjectSerializer.serialize(fromEffectiveAt, "string");
        }

        if (reResolve !== undefined) {
            localVarQueryParameters['reResolve'] = ObjectSerializer.serialize(reResolve, "boolean");
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: string; }")
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
            return new Promise<{ response: http.IncomingMessage; body: UpsertPortfolioTransactionsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UpsertPortfolioTransactionsResponse");
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
     * Set the holdings of the specified transaction portfolio to the provided targets. LUSID will automatically  construct adjustment transactions to ensure that the entire set of holdings for the transaction portfolio  are always set to the provided targets for the specified effective datetime. Read more about the difference between  adjusting and setting holdings here https://support.lusid.com/docs/how-do-i-manually-adjust-or-set-holdings.
     * @summary SetHoldings: Set holdings
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param effectiveAt The effective datetime or cut label at which the holdings should be set to the provided targets.
     * @param adjustHoldingRequest The complete set of target holdings for the transaction portfolio.
     * @param reconciliationMethods Optional parameter for specifying a reconciliation method: e.g. FxForward.
     * @param overrideMovementName Optional parameter to override movement name for the set holdings.
     * @param overrideOffsetMovementName Optional parameter will create an additional offset movement for the set holdings with this new name and transaction type: CarryAsPnl
     */
    public async setHoldings (scope: string, code: string, effectiveAt: string, adjustHoldingRequest: Array<AdjustHoldingRequest>, reconciliationMethods?: Array<string>, overrideMovementName?: string, overrideOffsetMovementName?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AdjustHolding;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/holdings'
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
            throw new Error('Required parameter scope was null or undefined when calling setHoldings.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling setHoldings.');
        }

        // verify required parameter 'effectiveAt' is not null or undefined
        if (effectiveAt === null || effectiveAt === undefined) {
            throw new Error('Required parameter effectiveAt was null or undefined when calling setHoldings.');
        }

        // verify required parameter 'adjustHoldingRequest' is not null or undefined
        if (adjustHoldingRequest === null || adjustHoldingRequest === undefined) {
            throw new Error('Required parameter adjustHoldingRequest was null or undefined when calling setHoldings.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (reconciliationMethods !== undefined) {
            localVarQueryParameters['reconciliationMethods'] = ObjectSerializer.serialize(reconciliationMethods, "Array<string>");
        }

        if (overrideMovementName !== undefined) {
            localVarQueryParameters['overrideMovementName'] = ObjectSerializer.serialize(overrideMovementName, "string");
        }

        if (overrideOffsetMovementName !== undefined) {
            localVarQueryParameters['overrideOffsetMovementName'] = ObjectSerializer.serialize(overrideOffsetMovementName, "string");
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
            body: ObjectSerializer.serialize(adjustHoldingRequest, "Array<AdjustHoldingRequest>")
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
            return new Promise<{ response: http.IncomingMessage; body: AdjustHolding;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "AdjustHolding");
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
     * Create or update Custodian Accounts in the Transaction Portfolios. A Custodian Account will be updated  if it already exists and created if it does not.  The batch limit per request is 2,000.
     * @summary UpsertCustodianAccounts: Upsert Custodian Accounts
     * @param scope The scope of the Transaction Portfolio.
     * @param code The code of the Transaction Portfolio. Together with the scope this uniquely identifies              the Transaction Portfolios.
     * @param custodianAccountRequest A list of Custodian Accounts to be created or updated.
     */
    public async upsertCustodianAccounts (scope: string, code: string, custodianAccountRequest: Array<CustodianAccountRequest>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CustodianAccountsUpsertResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/custodianaccounts'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertCustodianAccounts.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertCustodianAccounts.');
        }

        // verify required parameter 'custodianAccountRequest' is not null or undefined
        if (custodianAccountRequest === null || custodianAccountRequest === undefined) {
            throw new Error('Required parameter custodianAccountRequest was null or undefined when calling upsertCustodianAccounts.');
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
            body: ObjectSerializer.serialize(custodianAccountRequest, "Array<CustodianAccountRequest>")
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
            return new Promise<{ response: http.IncomingMessage; body: CustodianAccountsUpsertResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CustodianAccountsUpsertResponse");
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
     * Update or insert one or more properties onto a single custodian account. A property will be updated if it  already exists and inserted if it does not. All properties must be of the domain \'CustodianAccount\'.                Upserting a property that exists for a Transaction Portfolios, with a null value, will delete the instance of the property for that group.                Properties have an <i>effectiveFrom</i> datetime for which the property is valid, and an <i>effectiveUntil</i>  datetime until which the property is valid. Not supplying an <i>effectiveUntil</i> datetime results in the property being  valid indefinitely, or until the next <i>effectiveFrom</i> datetime of the property.
     * @summary UpsertCustodianAccountsProperties: Upsert custodian accounts properties
     * @param scope The scope of the Transaction Portfolios to update or insert the properties onto.
     * @param code The code of the Transaction Portfolios to update or insert the properties onto. Together with the scope this uniquely identifies the Transaction Portfolios.
     * @param custodianAccountScope The scope of the Custodian Account to update or insert the properties onto.
     * @param custodianAccountCode The unique ID of the custodian account to create or update properties for.
     * @param requestBody The properties to be updated or inserted onto the Transaction Portfolio. Each property in               the request must be keyed by its unique property key. This has the format {domain}/{scope}/{code} e.g. \&quot;CustodianAccount/Manager/Id\&quot;.
     */
    public async upsertCustodianAccountsProperties (scope: string, code: string, custodianAccountScope: string, custodianAccountCode: string, requestBody?: { [key: string]: Property; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CustodianAccountProperties;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/custodianaccounts/{custodianAccountScope}/{custodianAccountCode}/properties/$upsert'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'custodianAccountScope' + '}', encodeURIComponent(String(custodianAccountScope)))
            .replace('{' + 'custodianAccountCode' + '}', encodeURIComponent(String(custodianAccountCode)));
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
            throw new Error('Required parameter scope was null or undefined when calling upsertCustodianAccountsProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertCustodianAccountsProperties.');
        }

        // verify required parameter 'custodianAccountScope' is not null or undefined
        if (custodianAccountScope === null || custodianAccountScope === undefined) {
            throw new Error('Required parameter custodianAccountScope was null or undefined when calling upsertCustodianAccountsProperties.');
        }

        // verify required parameter 'custodianAccountCode' is not null or undefined
        if (custodianAccountCode === null || custodianAccountCode === undefined) {
            throw new Error('Required parameter custodianAccountCode was null or undefined when calling upsertCustodianAccountsProperties.');
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
            return new Promise<{ response: http.IncomingMessage; body: CustodianAccountProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CustodianAccountProperties");
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
     * Create or update certain details for a particular transaction portfolio. The details are updated if they already exist, and inserted if they do not.                Note that not all elements of a transaction portfolio definition are  modifiable once it has been created due to the potential implications for data already stored.
     * @summary UpsertPortfolioDetails: Upsert portfolio details
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the               scope this uniquely identifies the transaction portfolio.
     * @param createPortfolioDetails The details to create or update for the specified transaction portfolio.
     * @param effectiveAt The effective datetime or cut label at which the updated or inserted details should become valid.               Defaults to the current LUSID system datetime if not specified.
     */
    public async upsertPortfolioDetails (scope: string, code: string, createPortfolioDetails: CreatePortfolioDetails, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioDetails;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/details'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertPortfolioDetails.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertPortfolioDetails.');
        }

        // verify required parameter 'createPortfolioDetails' is not null or undefined
        if (createPortfolioDetails === null || createPortfolioDetails === undefined) {
            throw new Error('Required parameter createPortfolioDetails was null or undefined when calling upsertPortfolioDetails.');
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
            body: ObjectSerializer.serialize(createPortfolioDetails, "CreatePortfolioDetails")
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
            return new Promise<{ response: http.IncomingMessage; body: PortfolioDetails;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioDetails");
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
     * Create or update instructions to settle specific transactions.
     * @summary [EARLY ACCESS] UpsertSettlementInstructions: Upsert Settlement Instructions.
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio.
     * @param settlementInstructionRequest The definition of the settlement instruction.
     */
    public async upsertSettlementInstructions (scope: string, code: string, settlementInstructionRequest: Array<SettlementInstructionRequest>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfTransactionSettlementInstruction;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/settlementinstructions'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertSettlementInstructions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertSettlementInstructions.');
        }

        // verify required parameter 'settlementInstructionRequest' is not null or undefined
        if (settlementInstructionRequest === null || settlementInstructionRequest === undefined) {
            throw new Error('Required parameter settlementInstructionRequest was null or undefined when calling upsertSettlementInstructions.');
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
            body: ObjectSerializer.serialize(settlementInstructionRequest, "Array<SettlementInstructionRequest>")
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
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfTransactionSettlementInstruction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfTransactionSettlementInstruction");
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
     * Create or update one or more transaction properties for a single transaction in the transaction portfolio.  Each property will be updated if it already exists and created if it does not.  Both transaction and portfolio must exist at the time when properties are created or updated.
     * @summary UpsertTransactionProperties: Upsert transaction properties
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param transactionId The unique ID of the transaction to create or update properties for.
     * @param requestBody The properties and their associated values to create or update.
     */
    public async upsertTransactionProperties (scope: string, code: string, transactionId: string, requestBody: { [key: string]: PerpetualProperty; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpsertTransactionPropertiesResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions/{transactionId}/properties'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
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
            throw new Error('Required parameter scope was null or undefined when calling upsertTransactionProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertTransactionProperties.');
        }

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling upsertTransactionProperties.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling upsertTransactionProperties.');
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: PerpetualProperty; }")
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
            return new Promise<{ response: http.IncomingMessage; body: UpsertTransactionPropertiesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UpsertTransactionPropertiesResponse");
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
     * Create or update transactions in the transaction portfolio. A transaction will be updated  if it already exists and created if it does not.  The maximum number of transactions that this method can upsert per request is 10,000.
     * @summary UpsertTransactions: Upsert transactions
     * @param scope The scope of the transaction portfolio.
     * @param code The code of the transaction portfolio. Together with the scope this uniquely identifies              the transaction portfolio.
     * @param transactionRequest A list of transactions to be created or updated.
     * @param preserveProperties If set to false, the entire property set will be overwritten by the provided properties. If not specified or set to true, only the properties provided will be updated.
     * @param dataModelScope The optional scope of a Custom Data Model to use
     * @param dataModelCode The optional code of a Custom Data Model to use
     */
    public async upsertTransactions (scope: string, code: string, transactionRequest: Array<TransactionRequest>, preserveProperties?: boolean, dataModelScope?: string, dataModelCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpsertPortfolioTransactionsResponse;  }> {
        const localVarPath = this.basePath + '/api/transactionportfolios/{scope}/{code}/transactions'
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
            throw new Error('Required parameter scope was null or undefined when calling upsertTransactions.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertTransactions.');
        }

        // verify required parameter 'transactionRequest' is not null or undefined
        if (transactionRequest === null || transactionRequest === undefined) {
            throw new Error('Required parameter transactionRequest was null or undefined when calling upsertTransactions.');
        }

        if (preserveProperties !== undefined) {
            localVarQueryParameters['preserveProperties'] = ObjectSerializer.serialize(preserveProperties, "boolean");
        }

        if (dataModelScope !== undefined) {
            localVarQueryParameters['dataModelScope'] = ObjectSerializer.serialize(dataModelScope, "string");
        }

        if (dataModelCode !== undefined) {
            localVarQueryParameters['dataModelCode'] = ObjectSerializer.serialize(dataModelCode, "string");
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
            body: ObjectSerializer.serialize(transactionRequest, "Array<TransactionRequest>")
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
            return new Promise<{ response: http.IncomingMessage; body: UpsertPortfolioTransactionsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UpsertPortfolioTransactionsResponse");
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
