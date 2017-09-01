$(function(){

    var say_source = $('#say-template').html();

    //var say_source = '<div class="say" item-id="{{id}}"><b>I say:</b> - {{text}}</div>';
    var say_template = Handlebars.compile(say_source);

    // variant:
    //var say_template = Handlebars.compile('<div class="say" item-id="{{id}}"><b>I say:</b> - {{say}}</div>');

    function doSearch(){

        //var id = this.getAttribute("item-id")); // Standard JS
        var id = $(this).attr("item-id");
        var replic = getReplicById(id);

        //var context = {id: replic.id, text: replic.say};
        var rendered_html = say_template(replic);

        // variant:
        //var rendered_html = say_template({id: replic.id, text: replic.say});

        $("#results").html(rendered_html);
        $("#answer").html('');
        $("#answering").html('');

        $(".say").click(function() {
            var id = $(this).attr("item-id");
            var replic = getReplicById(id);
            $("#answer").html(replic.answer);
            $("#answer").attr("item-id", id);
            
        $("#answer").click(function(){
           var id=$(this).attr("item-id");
            var replic = getReplicById(id);
            $("#answering").html(replic.answering);
            
        })
        
        })

    }
    // Click handler for the seqrch buttons
    $('.search-btn').click(doSearch); 

    // variant, without HB:
    // $("#results").html('<div class="say" item-id="' + replic.id + '"><b>I say:</b> - ' + replic.say + '</div>');

    // When we display a new sentence, we clear the answer
    

    // Click handler for the new sentence

    // Utility function: return replic corresponding to a given id
    function getReplicById(id){
        for (var i in congratulate){
            var replic= congratulate[i];
            if (replic.id == id)
                return congratulate[i];
        }
    }

});





