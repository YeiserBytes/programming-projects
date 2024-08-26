def bin2dec(bin: str) -> int:
    dec = 0
    for i in range(len(bin)):
        dec += int(bin[i]) * 2 ** (len(bin) - i - 1)
    return dec


if __name__ == "__main__":
    bin = input("Enter a binary number: ")
    print(bin2dec(bin))
