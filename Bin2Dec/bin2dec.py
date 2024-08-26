def bin2dec(bin: str) -> int:
    dec = 0
    for i in range(len(bin)):
        dec += int(bin[i]) * 2 ** (len(bin) - i - 1)
    return dec


if __name__ == "__main__":
    while True:
        bin = input("Enter a binary number: ")

        if len(bin) >= 8:
            print("Binary number must be less than 8 bits")
        else:
            break

    for i in range(len(bin)):
        if bin[i] != "0" and bin[i] != "1":
            print("Invalid binary number")
            break

    print(f"Result: {bin} = {bin2dec(bin)}")
