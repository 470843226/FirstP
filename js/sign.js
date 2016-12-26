var iptTel = document.getElementById("tel"),
				iptCode = document.getElementById("code"),
				form = document.forms[0],
				isGotCode = 0,
				errSpan = document.getElementById("err");

			// 封装ajax方法
			function ajax(option){
				var xhr = new XMLHttpRequest,
					type = option.type || "get",
					url = option.url,
					data = option.data,
					dataType = option.dataType || "json",
					success = option.success,
					error = option.error,
					isGet = +(type === "get");
				// 将对象字面量转换为location.search形式的查询字符串
				function serialize(obj){
					var i,
						arr = []
					for(i in obj){
						arr.push(["&", i, "=", obj[i]].join(""));
					}
					return arr.join("").slice(1);
				}
				xhr.onreadystatechange = function(){
					var responseText;
					if(xhr.readyState === 4){
						responseText = xhr.responseText;
						if(xhr.status >= 200 && xhr.status < 300){
							typeof success === "function" && success.call(option, dataType === "json" ? eval(["(", responseText, ")"].join("")) : responseText);
						}else{
							typeof error === "function" && error.call(option, responseText);
						}
					}
				};
				xhr.open(type, [url, ["", ["?", serialize(data)].join("")][isGet]].join(""), option.async === undefined ? 1 : option.async);
				type === "post" && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send([serialize(data), null][isGet]);
			}
			document.getElementById("btnCode").onclick = function(){
				var iptTelVal = iptTel.value;
				if(/^1[3578]\d{9}$/.test(iptTelVal)){
					err.innerHTML = "";
					ajax({
						url : "/index",
						data : {
							tel : iptTelVal
						},
						dataType : "text",
						success : function(data){
							isGotCode = 1;
							console.log(data);
						}
					});
				}else{
					err.innerHTML = "<span>请输入正确手机号</span>";
				}
			};
			document.getElementById("btnSubmit").onclick = function(e){
				e.preventDefault();
				if(/^1[3578]\d{9}$/.test(iptTel.value) && /^\d{6}$/.test(iptCode.value) && isGotCode){
					form.submit();
				}
			};