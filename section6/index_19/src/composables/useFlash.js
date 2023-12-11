import swal from 'sweetalert';

export function useFlash() {
    function flash(title, message, status = 'success') {
        return swal(title, message, status);
    }

    return { flash };
}
