import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Restaurant from '../../../../backend/src/models/restaurant';
import { Input } from "@/components/ui/input";
import { useForm, useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-2 ">
            <div>
                <h2 className="text-3xl font-bold">Deatails</h2>
                <FormDescription className="text-xl">
                    Enter the details about your Restaurant
                </FormDescription>
            </div>
            <FormField
                control={control}
                name="restaurantName"
                render={({ field }) =>
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl><Input {...field} className="border-primary"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>}
            />

            <div className="flex gap-4">
                <FormField
                    control={control}
                    name="city"
                    render={({ field }) =>
                        <FormItem className="flex-1">
                            <FormLabel>City</FormLabel>
                            <FormControl><Input {...field} className="border-primary" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>}
                />

                <FormField
                    control={control}
                    name="country"
                    render={({ field }) =>
                        <FormItem className="flex-1">
                            <FormLabel>Country</FormLabel>
                            <FormControl><Input {...field} className="border-primary"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>}
                />
            </div>

            <FormField
                control={control}
                name="deliveryPrice"
                render={({ field }) =>
                    <FormItem>
                        <FormLabel>Delivery Price (₹)</FormLabel>
                        <FormControl>
                            <Input {...field} 
                            className="max-w[25%] border-primary" 
                            placeholder="2.50"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>}
            />

            <FormField
                control={control}
                name="estimatedDeliveryTime"
                render={({ field }) =>
                    <FormItem>
                        <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
                        <FormControl>
                            <Input {...field} 
                            className="max-w[25%] border-primary"
                            placeholder="30"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>}
            />
        </div>
    )
}

export default DetailsSection;