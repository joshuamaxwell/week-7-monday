var hipsterWords = {

  paragraph: "IPhone 3 wolf moon before they sold out master cleanse. \
  Paleo kogi bicycle rights, Portland bitters readymade chambray viral. Plaid\
  dreamcatcher blog American Apparel raw denim cliche selfies. VHS fingerstache\
  aesthetic shabby chic brunch umami leggings, locavore bicycle rights ugh. Ennui\
  authentic disrupt photo booth. Four loko Vice iPhone, salvia chillwave 3 wolf\
  moon Tumblr yr quinoa banjo 90's McSweeney's ethnic. +1 meggings bespoke\
  Schlitz. Godard whatever freegan, tofu fixie +1 8-bit cred viral quinoa authentic\
  Intelligentsia jean shorts 90's. Salvia Blue Bottle biodiesel polaroid Brooklyn XOXO.\
  Gluten-free organic lomo, cliche gastropub tattooed ethnic aesthetic ennui dreamcatcher\
  retro +1 scenester pour-over. 3 wolf moon roof party farm-to-table, vinyl bitters lo-fi\
  keytar Godard kale chips gentrify VHS drinking vinegar American Apparel. Trust fund raw\
  denim cornhole Austin meggings Terry Richardson, selfies cray jean shorts leggings tofu\
  Banksy you probably haven't heard of them. Post-ironic Neutra readymade mixtape. 8-bit\
  disrupt iPhone Terry Richardson cliche. Irony deep v put a bird on it direct trade Echo Park.\
  Asymmetrical Shoreditch narwhal Cosby sweater vinyl mumblecore, Odd Future 90's messenger\
  bag High Life disrupt Truffaut meggings kogi. Butcher lomo Brooklyn, retro polaroid direct\
  trade fashion axe ethical stumptown selvage pug Schlitz. Deep v tote bag kale chips, normcore\
  McSweeney's leggings hella typewriter. Banh mi mixtape plaid, sustainable Tumblr messenger\
  bag cardigan polaroid farm-to-table Blue Bottle fanny pack you probably haven't heard of them\
  biodiesel flannel artisan. Yr Austin forage, fixie organic Marfa chillwave iPhone beard\
  distillery master cleanse shabby chic scenester single-origin coffee. Direct trade PBR&B\
  typewriter literally, slow-carb sustainable authentic. Pitchfork hella Pinterest, craft beer selvage\
  tattooed readymade. Ugh post-ironic Bushwick, ethnic tofu Tumblr typewriter XOXO four loko\
  jean shorts PBR&B sriracha iPhone. VHS occupy skateboard Odd Future gluten-free. Asymmetrical\
  quinoa whatever messenger bag. Master cleanse forage DIY brunch, quinoa fixie letterpress\
  ethnic. Shoreditch +1 biodiesel, jean shorts American Apparel chia synth pour-over Neutra shabby chic quinoa. Mlkshk lo-fi lomo, trust fund Austin beard VHS literally McSweeney's occupy. Mixtape put a bird on it pour-over art party ugh, bicycle rights PBR&B. Tumblr banjo XOXO pickled trust fund, sriracha master cleanse. Fashion axe ethnic mustache church-key lo-fi. Tumblr Wes Anderson whatever typewriter, ethical literally forage Marfa meh locavore. Sustainable pickled Wes Anderson, ethical trust fund aesthetic readymade occupy XOXO cliche bitters ethnic. Hashtag before they sold out Banksy, VHS wolf chambray irony trust fund Vice. Narwhal Helvetica iPhone, asymmetrical Odd Future Shoreditch chia craft beer pour-over McSweeney's lomo photo booth four loko forage. Normcore skateboard whatever messenger bag brunch. 90's gentrify tattooed forage artisan shabby chic, beard small batch Tumblr gluten-free post-ironic Schlitz yr flannel 8-bit. Food truck +1 keytar Portland pork belly, 90's four loko raw denim banh mi Helvetica photo booth readymade Shoreditch pop-up. Hoodie Schlitz bicycle rights DIY roof party, vinyl chillwave locavore. Gluten-free scenester Odd Future, 8-bit hoodie aesthetic YOLO Terry Richardson letterpress pug ethical lomo. Tattooed cardigan before they sold out selfies Pitchfork selvage. Pinterest umami freegan, viral paleo Tonx wayfarers before they sold out distillery. Terry Richardson asymmetrical gentrify XOXO Marfa deep v. Blue Bottle Tumblr chillwave jean shorts swag, pug polaroid asymmetrical before they sold out cred tofu retro Godard. Brooklyn lo-fi sustainable blog. Scenester tousled biodiesel XOXO, DIY lomo letterpress meh post-ironic. Helvetica readymade put a bird on it, Tumblr tofu 3 wolf moon Banksy ethnic High Life drinking vinegar synth mlkshk. Direct trade single-origin coffee farm-to-table kitsch disrupt, VHS iPhone umami pug lomo. Pour-over hashtag roof party keffiyeh Thundercats, tofu Echo Park banh mi Intelligentsia bitters. Scenester 3 wolf moon vinyl paleo +1 Austin, try-hard vegan messenger bag gentrify freegan organic. Irony stumptown selfies sustainable hashtag. Carles pop-up banh mi, vegan Helvetica mumblecore letterpress post-ironic food truck Bushwick artisan Vice kale chips literally. Master cleanse Pitchfork banjo Blue Bottle, mlkshk Williamsburg craft beer kitsch. Marfa fingerstache post-ironic Pitchfork, plaid kitsch bicycle rights you probably haven't heard of them squid yr disrupt vegan Vice. Fap yr paleo organic Austin, wolf next level pop-up locavore Portland Vice. Bicycle rights Blue Bottle Echo Park Tumblr master cleanse. Pork belly gastropub fanny pack, post-ironic raw denim banh mi yr butcher retro bitters pickled tofu fap. Ennui hoodie yr slow-carb. Kitsch tousled seitan, mumblecore Pinterest direct trade Godard kale chips salvia. Plaid XOXO food truck typewriter Helvetica, chambray kale chips. Ugh forage lo-fi, mixtape VHS DIY before they sold out. Tattooed Echo Park ethnic quinoa Odd Future art party, American Apparel small batch Vice food truck Thundercats fingerstache. Cosby sweater sartorial vinyl Tonx next level selvage. Banksy slow-carb Vice, Terry Richardson before they sold out selvage vinyl. Odd Future banjo jean shorts banh mi 90's disrupt. Organic Williamsburg flannel 3 wolf moon mumblecore. Letterpress tattooed put a bird on it irony, drinking vinegar +1 single-origin coffee pug shabby chic Williamsburg selvage. Seitan bespoke fap, retro polaroid artisan iPhone Truffaut street art. Distillery viral American Apparel keffiyeh, skateboard banjo fanny pack. Irony deep v kitsch Tonx, pour-over Tumblr disrupt post-ironic direct trade." ,
  
  sample: function (number) {
    this.paragraph = this.paragraph.replace(/[|&;$%@"<>()+,.]|them|\s\w\s|\sof\s|\sout\s|\syou\s|\sput\s|\son\s|\sit\s|\sthey\s/g, "");
    paragraphArray = this.paragraph.split(/\s+/g).slice(1,-1) // the ' +' is regex to split using all the spaces
    paragraphArray = _.reject(paragraphArray, function(word){
      return word == ''
    })

    return _.sample(paragraphArray, number);
  }
}

