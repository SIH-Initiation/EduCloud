let input_str = {
    title: "Slides",
    forms: [
      {
        type: "text",
        name: "name",
        class: "form-control mb-2",
        placeholder: "Enter Data..."
      },
      {
        type: "file",
        name: "image",
        class: "btn btn-light btn-sm mb-2 btn-block"
      },
      {
        type: "number",
        name: "mobile",
        class: "form-control mb-2",
        placeholder: "Enter Data..."
      }
    ],
    exportTo:('#getData')
  };
  
  $(document).ready(() => {
    $(".addInput").click(function() {
      build_inputs($(this), input_str);
    });
  });
  let randId = 1;
  function build_inputs(e, configs=false) {
      if(!configs){
          configs = {title:"Slides",forms:[{type:"text",name:"name",class:"form-control mb-2",placeholder:"Enter Data..."}],exportTo:false};
      }
    let ind = $(".adp-slides").length > 0 ? $(".adp-slides").length + 1 : 1;
    let str = `<div id="${configs.title +
      "-" +
      ind}" class="row adp-slides"><div class="col-md-10"><div class="form-group"><label><b>${
      configs.title
    } ${ind}</b></label>`;
    configs.forms.forEach(config => {
      str += `<input type="${config.type}" name="${config.name}" id="adpElem${randId}" class="adpInputs ${config.class}" data-rel="${configs.title+"-"+ind}" placeholder="${config.placeholder}">`;
      let currentVal = e
        .parent()
        .siblings()
        .val();
      $("#adpElem" + randId)
        .val(currentVal)
        .focus();
      e.parent()
        .siblings()
        .val("");
      randId++;
    });
    str += `</div></div><div class="col-md-2"><span class="badge badge-danger removeSlide" data-target="${configs.title +
      "-" +
      ind}"><i class="fas fa-trash-alt"></i></span></div></div>`;
    $(".inputWrapper").append(str);
    $(".removeSlide").click(function() {
      $("#" + $(this).attr("data-target")).remove();
    });
    if(configs.exportTo){
        $('.adpInputs').blur(()=>{
            let data = []
        $.each($('.adp-slides'),(i,e)=>{
            let obj = {},parentObj={};
         
           $.each($(e).children().find('input'),(i,e)=>{
               obj[$(e).attr('name')] = $(e).val();
           });
           parentObj[$(e).attr('id')]=obj;
          data.push(parentObj)
        })
      $(configs.exportTo).val(JSON.stringify(data,null,2))
        })
    }
  }
  