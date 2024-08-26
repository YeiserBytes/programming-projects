from unittest import TestCase, main
import bin2dec

class TestBin2Dec(TestCase):
    test_cases = [
        ("11001", 25),
        ("11001011", 203),
        ("00011", 3),
        ("1010101", 85),
        ("0011101", 29)
    ]

    def test_bin2dec(self):
        for (binary, decimal) in self.test_cases:
            self.assertEqual(bin2dec.bin2dec(binary), decimal)

            if decimal == bin2dec.bin2dec(binary):
                print(f"Passed: {binary} -> {bin2dec.bin2dec(binary)}")
            else:
                print(f"Failed: {binary} -> {bin2dec.bin2dec(binary)}")
                break

if __name__ == "__main__":
    main()
