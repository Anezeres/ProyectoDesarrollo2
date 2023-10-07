import re


def validador_correo(valor):
    EXPREG = re.compile("^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$")

    TAM = len(valor) < 71

    return (EXPREG.fullmatch(valor) is not None) and TAM


def validador_nombre(valor):
    EXPREG = re.compile("^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")
    TAM = len(valor) > 4 and len(valor) < 50

    return (EXPREG.fullmatch(valor) is not None) and TAM


def validador_contrasena(valor):
    EXPREG = re.compile(
        '^[\w\sñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙ@!ºª#%&¬=¡¿<>~ç($)(?)({)(})(:)(.)"]*$'
    )
    TAM = (len(valor) > 5) and (len(valor) < 41)

    return (EXPREG.fullmatch(valor) is not None) and TAM


def validador_num(valor):
    EXPREG = re.compile('^[0-9]*$')

    return EXPREG.fullmatch(valor) is not None
