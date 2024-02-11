$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $(document).ready(function(){
        $('.slider').slick();
    });

    let accordion = $( "#accordion" );

    accordion.accordion({
        heightStyle: "content",
        collapsible: true
    });

    accordion.accordion( "option", "icons", null );

    $('.open-image').magnificPopup({
        type:'image'
    });

    let index = $('#index');
    index.inputmask({"mask": "999999"});

    $('#create-order').click(function() {

        let firstName = $('#first-name');
        let lastName = $('#last-name');
        let phone = $('#phone');
        let country = $('#country');

        let address = $('#address');

        // все поля формы должны быть заполнены
        if(!firstName.val() || !lastName.val() || !phone.val() || !country.val() || !index.val() || !address.val()) {
            alert('Заполните все поля');
            return
        }


        if(index.val().length !== 6) {
            alert('Индекс должен содержать 6 символов');
            return
        }

        $('#form').hide();
        $('.form-container h2').append('<h3 class="text-center my-5 py-5">Спасибо за заказ!  Мы свяжемся с вами в ближайшее время!</h3>')

    })
})