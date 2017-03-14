function openModal() {
    var $ = window.jQuery;
    $('[data-type="submit"]').click(function() {
        var $ = window.jQuery;
        var form = $('[data-coffee-order="form"]');
        var data = {};
        $(form).serializeArray().forEach(function(item) {
            data[item.name] = item.value;
        });

        var email = data['emailAddress'];
        var size = data['size'];
        var flavor = data['flavor'];
        var strength = data['strength'];
        if (size == 'coffee-zilla' && strength == 100 && flavor != '') {
            var dialog = {};
            var $message = $('<div></div>');
            $message.append('Congratulations on your amazing intensity and commitment to flavor! <br/> <br/>');

            dialog['title'] = 'You have unlocked an achievement';

            if (email == '') {
                $message.append('Unfortunately, you did not enter your email address, so you do not get a power-up option');
            } else {
                $message.append('Please choose a power-up option: ');
                $message.append('<div class="radio"><label><input type="radio" name="size" value="timeTravel">Time Travel</label></div><div class="radio"><label><input type="radio" name="size" value="mindReading" checked>Mind Reading</label></div><div class="radio"><label><input type="radio" name="size" value="bugFreeCode">Bug-Free Code</label></div>');
            }
            dialog['message'] = $message;
            dialog['buttons'] = [{
                label: 'OK',
                action: function(dialogItself) {
                    dialogItself.close();
                }
            }];

            BootstrapDialog.show(dialog);
        }

    });

}

openModal();
      
