'use client'
import React, { useState } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';
import { useParams, useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown, PlusCircle, Store } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';

const StoreSwitcher = ({ className, items }) => {
    const [open, setOpen] = useState(false)
    const storeModal = useStoreModal()
    const params = useParams();
    const router = useRouter()
    // console.log('params switch',params.storeId);
    const formattedItems = items.map((item) => ({
      label: item.name,
      value: item.id
    }));
    // console.log('from store-switches',formattedItems, items);
    const currentStore = formattedItems?.find((item) => item.value === params.storeId);
        const onStoreSelected = (store) => {
      // console.log('im ID',store);
        setOpen(false)
        router.push(`/${store.value}`)
    }
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div>
                    <Button
                        variant='outline'
                        size='sm'
                        role='combobox'
                        aria-expanded={open}
                        aria-label="select a store"
                        className={cn('w-[200px] justify-between', className)}
                    >
                        <Store className='mr-2 h-4 w-4' />  {currentStore?.label}
                        <ChevronsUpDown className='ml-auto w-4 h-4 shrink-0 opacity-50' />
                    </Button>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search store..." />
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems?.map((store) => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelected(store)}
                  className="text-sm"
                >
                  <Store className="mr-2 h-4 w-4" />
                  {store.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentStore?.id === store.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false)
                  storeModal.onOpen()
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
        </Popover>

    );
};

export default StoreSwitcher;