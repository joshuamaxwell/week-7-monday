var MainRouter=Backbone.Router.extend({routes:{"":"listView","items/:id":"itemView"},initialize:function(){},listView:function(){$(".list-viewer").empty(),etsyItems.each(function(a){new ListView({model:a})})},itemView:function(a){var b=etsyItems.find(function(b){return b.get("listing_id")==a});new ItemView({model:b})}}),EtsyItem=Backbone.Model.extend({}),EtsyItemsCollection=Backbone.Collection.extend({model:EtsyItem,url:"http://tiny-pizza-server.herokuapp.com/collections/EtsyItemCollection"}),ItemView=Backbone.View.extend({className:"item-view panel panel-default",initialize:function(){this.render(),$(".item-viewer").html(this.el)},renderTemplate:_.template($("#item-view-template").text()),render:function(){this.$el.html(this.renderTemplate(this.model))}}),ListView=Backbone.View.extend({tagName:"a",className:"list-view list-group-item clearfix",initialize:function(){this.setHref(),this.render(),$(".list-viewer").append(this.el)},renderTemplate:_.template($("#list-view-template").text()),render:function(){this.$el.html(this.renderTemplate(this.model))},setHref:function(){var a=this.model.get("listing_id"),b="#/items/"+a;this.$el.attr({href:b})}});router=new MainRouter,$.ajax({dataType:"jsonp",url:"https://openapi.etsy.com/v2/listings/active.js?callback=etsyResults&fields=title,price,description,listing_id,url&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus",data:"",success:function(a){etsyItems=new EtsyItemsCollection(a.results);etsyItems.each(function(a){new ListView({model:a})}),Backbone.history.start()},error:function(){}});